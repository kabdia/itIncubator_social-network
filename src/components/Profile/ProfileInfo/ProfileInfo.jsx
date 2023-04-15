import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloarer';

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader/>
  }
    return (<div className={classes.content__infoProfile}>
    <div className={classes.photo__background}>
      <img className={classes.photo__background_style} src="https://whiskas.ru/Content/img/header/slider2-kitten.jpg"/>
    </div>
    <div className={classes.photo__main}>
      <img className={classes.photo__profile} src={props.profile.photos.large}/>
    </div>
    <div className={classes.photo__info}>
    <div className={classes.photo__description}>
     <p className={classes.description__name}>{props.profile.fullName}</p>
    <p className={classes.description__quote}>{props.profile.aboutMe}</p>
    </div>
   </div>
   </div>
    );
}

export default ProfileInfo;