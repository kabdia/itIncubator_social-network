import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

  let posts = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} id ={p.id}/>))
  
  let newPostElements = React.createRef();
  let addPosts = ()=>{    
    
    let text = newPostElements.current.value;
    props.addPosts(text);
    
  }
  let onPostChange = () => {    
    let text = newPostElements.current.value;
    props.updateNewPostText(text);
    
  }
  
    return (<div className={classes.main__post_list}>
      <div className={classes.post_list__add_item}>
      <div className={classes.post_list__add_item_input}>
        <textarea onChange ={onPostChange} value={props.newPostText} ref = {newPostElements}className={classes.post_list__add_item_input_style}/>
      </div>
      <button onClick={addPosts}  className={classes.post_list__add_item_button}>Добавить</button>
      </div>
      {posts}
    </div>
  )  
}

export default MyPosts;