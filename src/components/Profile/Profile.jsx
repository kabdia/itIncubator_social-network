import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import FriendsProfile from './FriendsProfile/FriendsProfile';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    
    return (<div>
    <div >
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/> 
    </div>    
    <div className={classes.content__main}>      
    <MyPostsContainer />
                
    <FriendsProfile/>       
      
    </div>
  </div> 
  )  
}

export default Profile;