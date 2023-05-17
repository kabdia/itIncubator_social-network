import React from 'react'
import Paginator from '../common/Paginator/Paginator';
import User from './User';



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
return <>
<Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize}/>
        { props.users.map( u => <User user={u} 
                                      key={u.id}
                                      followingProgress={props.followingProgress}
                                      unfollow={props.unfollow}
                                      follow={props.follow}
                                      />)
                 
        }
</>


}

export default Users;