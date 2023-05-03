import React from 'react';
import classes from './Login.module.css'
import { useForm } from 'react-hook-form';
import {login} from '../../redux/auth-reducer'
import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom'


const Login = (props) => {
const {
    register,
    formState:{
        errors,
        isValid
    },
    handleSubmit,
    reset,
}=useForm({
    mode:'onBlur'
});

const onSubmit = (data)=>{
    props.login(data.login, data.password, data.rememberMe)
    reset()
}

if (props.isAuth) {
    return <Navigate replace to={"/profile"}/>
}
 return <div>
    
    <form onSubmit={handleSubmit(onSubmit)} >
        <h1>Логин</h1>
        <input {...register('login', {
            required: 'Поле обязательно для заполнения',
            minLength: {
                value:5,
                message:'Минимум 5 символов'
            }})}
            className={errors.login && classes.inputBorder_error}
            />
        <div>
        {errors?.login && <p className={classes.form__color_errorMessage}>{errors?.login?.message || 'Error'}</p>}
        </div>
        <h1>Пароль</h1>
        <input  type="password"
        {...register('password', {
            required: 'Поле обязательно для заполнения',
            minLength: {
                value:8,
                message:'Минимум 8 символов'
            }})}
            className={errors.password && classes.inputBorder_error}/>
            <div>
        {errors?.password && <p className={classes.form__color_errorMessage}>{errors?.password?.message || 'Error'}</p>}
        </div>
        <div>
            <input 
            type='checkbox'{
                ...register('rememberMe', {
                    
                })
            }/>
            <p>remember me</p>
       </div>
        <br/><input type="submit" disabled={!isValid}/>
    </form>
    
    </div>
}
const mapStateToProps = (state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);