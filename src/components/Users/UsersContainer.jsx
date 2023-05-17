import React from 'react'
import {connect} from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from '../../redux/users-reducer';

import Users from './Users'
import Preloader from '../common/Preloader/Preloarer';
import { compose } from 'redux';
import { withAuthComponent } from '../hoc/withAuthRedurect';
import {getUsersRequest, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress} from '../../redux/users-selector';

class UsersContainer extends React.Component {
   
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize);        
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);       
    }
    render(){       
        return <>
        {this.props.isFetching ? 
        <Preloader/> :
        null}
        <Users totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged ={this.onPageChanged}
                users ={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                followingProgress={this.props. followingProgress}
                />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users:getUsersRequest(state),
        pageSize:getPageSize(state),
        totalItemsCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingProgress:getFollowingProgress(state),
    }
}




export default compose(
    withAuthComponent,
    connect(mapStateToProps, 
        {follow, unfollow, 
         setCurrentPage, 
         toggleFollowingProgress, getUsers})
)(UsersContainer)