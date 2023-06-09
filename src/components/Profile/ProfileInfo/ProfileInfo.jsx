import React, { memo } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloarer';
import img from './../../../assets/images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = memo((props) => {
  if (!props.profile){
    return <Preloader/>
  }
    return (<div className={classes.content__infoProfile}>
    <div className={classes.photo__background}>
      <img className={classes.photo__background_style} src="https://whiskas.ru/Content/img/header/slider2-kitten.jpg"/>
    </div>
    <div className={classes.photo__main}>
      <img className={classes.photo__profile} src={props.profile.photos.large!=null ? props.profile.photos.large:img}/>
    </div>
    <div className={classes.photo__info}>
    <div className={classes.photo__description}>
      
     <p className={classes.description__name}>{props.profile.fullName}</p>
    <p className={classes.description__quote}><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></p>
    </div>
   </div>
   </div>
    );
    
})

export default memo(ProfileInfo);