import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import FriendsProfile from './FriendsProfile/FriendsProfile';

const Profile = (props) => {
  
    return (<div>
    <div >
    <ProfileInfo /> 
    </div>    
    <div className={classes.content__main}>      
      <MyPosts posts={props.profilePage.posts} addPosts={props.addPost}
              newPostText ={props.profilePage.newPostText} updateNewPostText ={props.updateNewPostText}/>
                
        <FriendsProfile/>       
      
    </div>
  </div> 
  )  
}

export default Profile;