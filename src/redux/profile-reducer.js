import { profileAPI, usersAPI } from './../components/api/api';

const ADD_POST_TO_WALL = 'ADD_POST_TO_WALL';
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


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
          case 'DELETE_POST':
            return{
              ...state,
              posts:[...state.posts.filter(p=> p.id != action.postId)]
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
     export const deletePost = (postId)=>({type:DELETE_POST,postId})

     export const getUserProfile = (userId)=> async(dispatch)=>{
      let responce= await usersAPI.getProfile(userId)
        dispatch(setUserProfile(responce.data))   
        
    }

    export const getStatus = (userId)=> async(dispatch)=>{
      let responce= await profileAPI.getStatus(userId)
        dispatch(setStatus(responce.data))   
        
    }
   
    export const updateStatus = (status)=> async(dispatch)=>{
      let responce= await profileAPI.updateStatus(status)
        if (responce.data.resultCode===0){
        dispatch(setStatus(status))             
        }           
        
    }

export default profileReducer;