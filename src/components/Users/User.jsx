import React from 'react'
import style from './Users.module.css'
import img from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let User = ({user,followingProgress,unfollow,follow}) => {
    debugger
return <>
                
                <div className={style.usersList__item}>
                    <div className={style.item_photo}>
                        <img src={user.photos.small != null ? user.photos.small : img } className={style.item_photo_style}/>
                    </div>
                    <div className={style.item_information}>
                        <NavLink to={'/profile/'+ user.id}>
                        <div className={style.information_nameStyle}>{user.name}</div>
                        </NavLink>
                        <div className={style.infotmation_quoteStyle}>{user.status}</div>
                        <div>u.location.city</div>
                        <div>u.location.country</div>
                    </div>
                    <div className={style.item_addFriendButton}> 
                        {   user.followed ? 
                            <button disabled ={followingProgress.some(id=>id=== user.id)} className={style.item_addFriendButton_style} onClick={() =>{
                            unfollow(user.id)
                                
                    }}>Отписаться</button>:
                        <button disabled ={followingProgress.some(id=>id===user.id)} className={style.item_addFriendButton_style} onClick={() =>{
                        follow(user.id)}}>Подписаться</button>
                        
                    }                                              
                        </div>
                    
                </div> 
                </>


}

export default User;