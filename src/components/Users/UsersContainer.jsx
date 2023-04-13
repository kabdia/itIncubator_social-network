import UsersAPIComponent from './UsersAPIComponent';
import {connect} from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import axios from 'axios'
import Users from './Users'

class UsersContainer extends React.Component {
   
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
        this.props.setUsers(responce.data.items)
        this.props.setTotalUsersCount(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
        this.props.setUsers(responce.data.items)
        
        })
    }
    render(){       
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged ={this.onPageChanged}
                      users ={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      />
    }
}

let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID)=> {
            dispatch(followAC(userID))
        },
        unfollow: (userID)=> {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);