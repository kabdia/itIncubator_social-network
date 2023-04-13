import React from 'react'
import style from './Users.module.css'
import img from './../../assets/images/user.png'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
return <div className={style.usersList}>
        <div className={style.usersList__pagination}>
            <ul className={style.pagination__items}>
                {pages.map(p=>{
                     return (
                        <span className={style.items__block}>
                        <li onClick={(e)=>{props.onPageChanged(p)}} className={props.currentPage===p && style.items__selected}>{p}</li>
                        </span>
                     )
                })}       
               
            </ul>
        </div>
        {
            props.users.map( u => 
                <div className={style.usersList__item} key={u.id}>
                    <div className={style.item_photo}>
                        <img src={u.photos.small != null ? u.photos.small : img } className={style.item_photo_style}/>
                    </div>
                    <div className={style.item_information}>
                        <div className={style.information_nameStyle}>{u.name}</div>
                        <div className={style.infotmation_quoteStyle}>{u.status}</div>
                        <div>u.location.city</div>
                        <div>u.location.country</div>
                    </div>
                    <div className={style.item_addFriendButton}> 
                        {
                            u.followed ? <button className={style.item_addFriendButton_style} onClick={()=>{props.unfollow(u.id)}}>Подписаться</button>:
                                         <button className={style.item_addFriendButton_style} onClick={()=>{props.follow(u.id)}}>Отписаться</button>
                        }                                              
                        </div>
                    
                </div> 
                                
                )
                 
        }
</div> 

}

export default Users;