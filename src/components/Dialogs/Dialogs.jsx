import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Navigate } from "react-router-dom";
import { useForm } from 'react-hook-form';


const Dialogs = (props) => {
    
    let dialogsElement = props.messagePage.dialogs.map(d => (<DialogsItem name ={d.name} key={d.id} id={d.id}/>))
    let messagesElements = props.messagePage.messages.map(m => (<Message message={m.message} key={m.id}/>));
    
    const {
        register,
        formState:{
            errors,
            isValid
        },
        handleSubmit,        
    }=useForm({
        mode:'onBlur',        
    });

    let addNewMessage = (values) => {        
        props.sendNewMessage(values.message)
    }

    if (!props.isAuth) return <Navigate to={"/login"}/>
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}                
            </div>
            <div className={style.messages}>
                {messagesElements}               
                 
                <form onSubmit={handleSubmit(addNewMessage)}>
                 <div>
                 <textarea {...register('message')}                
                    placeholder='Введи сообщение' 
                    value ={props.messagePage.newMessageText} />
                </div>   
                <div>
                <input type="submit" />
                </div>
                </form>                    
            </div>
        </div>
    )
    
}

export default Dialogs; 
