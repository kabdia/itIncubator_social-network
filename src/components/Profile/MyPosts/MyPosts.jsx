import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { useForm } from 'react-hook-form';



const MyPosts = (props) => {

  let posts = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} id ={p.id}/>))
  
  
  let onAddPost = (value)=>{     
    props.addPost(value.post);    
  }
  

  const {
    register,
    formState:{
        errors,
        isValid
    },
    handleSubmit,        
}=useForm({
    mode:'onBlur'
});
  
    return (<div className={classes.main__post_list}>
      <form onSubmit={handleSubmit(onAddPost)}>
      <div className={classes.post_list__add_item}>
      <div className={classes.post_list__add_item_input}>
        <textarea {...register('post',{minLength:20})} 
        placeholder='Введите текст' 
        className={isValid ? classes.post_list__add_item_input_style : classes.post_list__add_item_input_style_error}/>
      </div>
      <input type="submit" className={classes.post_list__add_item_button}/>  
      </div>
      </form>
      {posts}
    </div>
  )  
}

export default MyPosts;