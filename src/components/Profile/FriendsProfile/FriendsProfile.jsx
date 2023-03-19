import React from 'react';
import classes from './FriendsProfile.module.css';

const FriendsProfile = () => {
  return (<div className={classes.main__friends}>
    <div className={classes.friends_block}> 
       <div className={classes.friends_block_title}>
       <p className={classes.friends_block_title_style}>Друзья</p>
       </div>
       <div className={classes.friends_block_content}>
       <p className={classes.friends_block_content_style}>У вас пока отсутствуют друзья</p>
       <div className={classes.friends_block_img}>
        <img className={classes.friends_block_img_style} src="https://cdn-icons-png.flaticon.com/512/53/53674.png"></img>
       </div>
       </div>
       </div>
       </div>
  )
}

export default FriendsProfile;