import { updateOblectinArray } from '../components/utils/object-helpers';
import { usersAPI } from './../components/api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW= 'UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS='TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalItemsCount:0,
    currentPage:1,      
    isFetching:false, 
    followingProgress:[],  
}

const usersReducer = (state = initialState,action) => {  
    switch (action.type){ 
      case FOLLOW:
      return {
        ...state,
        users:updateOblectinArray(state.users,action.userID,'id',{followed:false})
       
      }
      case UNFOLLOW:
        return {...state,
          users:updateOblectinArray(state.users,action.userID,'id',{followed:true})
        }
      case SET_USERS: {
        return {...state,users:action.users}
      }
      case SET_CURRENT_PAGE: {
        return {...state,currentPage:action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT: {
        return {...state,totalItemsCount:action.totalItemsCount}
      }
      case TOGGLE_IS_FETCHING: {
        return {...state,isFetching:action.isFetching}
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
        return  {...state,
          followingProgress:action.isFetching ? [...state.followingProgress,action.userID]
          : [state.followingProgress.filter(id=>id!==action.userID)]}
      }
      default: 
          return state         
     }
}


export const followSuccess = (userID) => ({type:FOLLOW, userID})
export const unfollowSuccess = (userID) =>({type:UNFOLLOW, userID})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalItemsCount) => ({type:SET_TOTAL_USERS_COUNT, totalItemsCount})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching,userID) => ({type:TOGGLE_IS_FETCHING, isFetching,userID})

export const getUsers = (currentPage,pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let data = await usersAPI.getUsers(currentPage,pageSize)    
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
    
}
  
}

const followUnfollowFlow = async (dispatch,userId,apiMethod, actionCreator)=>{
  dispatch(toggleFollowingProgress(true,userId))
  let responce=await apiMethod(userId)
  if (responce.data.resultCode === 0) {
  dispatch(actionCreator(userId))
  }  
dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
  return async (dispatch) => {
   followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess)
    
}}

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)
    
}}
export default usersReducer;