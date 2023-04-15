const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';

let initialState = {
    posts: [
      {id:1, message:"Подрал обои, я доволен собой", likesCount:12,},
      {id:2, message:"Сегодня ел и спал", likesCount:15,},     
      ], 
    newPostText:'it-kamasutra.com',     
    profile:null,   
}

const profileReducer = (state = initialState,action) => {
  
    switch (action.type){
        case 'ADD-POST': 
          let newPost = {
            id:5,
            message: state.newPostText,
            likesCount:0,
            }
          return {
            ...state,
            posts:[...state.posts, newPost],
            newPostText:'' 
          }
         case 'UPDATE-NEW-POST-TEXT': 
          return {
            ...state,
            newPostText:action.newText
          }  
          case 'SET_USER_PROFILE':
            return {
              ...state,
              profile:action.profile,
            }      
         
         default: return state;
    }
}

     export const addPost = () => ({type:ADD_POST})  
     export const onPostChange = (text) => ({type:UPDATE_NEW_POST_TEXT, newText:text})
     export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

export default profileReducer;