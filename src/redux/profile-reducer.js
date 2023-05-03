import { profileAPI, usersAPI } from './../components/api/api';

const ADD_POST_TO_WALL = 'ADD_POST_TO_WALL';
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'; 


let initialState = {
    posts: [
      {id:1, message:"Подрал обои, я доволен собой", likesCount:12,},
      {id:2, message:"Сегодня ел и спал", likesCount:15,},     
      ], 
        
    profile:null,
    status:"",   
}

const profileReducer = (state = initialState,action) => {
  
    switch (action.type){
        case 'ADD_POST_TO_WALL': 
          let newPost = {
            id:5,
            message: action.newPostText,
            likesCount:0,
            }
          return {
            ...state,
            posts:[...state.posts, newPost],
            newPostText:'' 
          }
         
          case 'SET_USER_PROFILE':
            return {
              ...state,
              profile:action.profile,
            }   
          case 'SET_STATUS':
            return {
              ...state,
              status:action.status,
            }   
         
         default: return state;
    }
}

     export const addPostToWall = (value) => ({type:ADD_POST_TO_WALL, newPostText:value})     
     export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
     export const setStatus = (status)=>({type:SET_STATUS,status})

     export const getUserProfile = (userId)=> (dispatch)=>{
      usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))   
        })
    }

    export const getStatus = (userId)=> (dispatch)=>{
      profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))   
        })
    }
   
    export const updateStatus = (status)=> (dispatch)=>{
      profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode===0){
        dispatch(setStatus(status))             
        }           
        })
    }

export default profileReducer;