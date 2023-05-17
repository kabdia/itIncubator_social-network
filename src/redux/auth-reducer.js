import { authAPI } from './../components/api/api';
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';


let initialState = {
  userId: 'null',
  email: 'null',
  login: 'null',   
  isAuth:false,
}

const authReducer = (state = initialState,action) => {  
    switch (action.type){ 
      case SET_USER_DATA: {
        return {...state, 
                ...action.data,
                isAuth:true,}
      }          
      default: 
          return state         
     }
}

export const setUserData = (userId,email,login,isAuth) => ({type:SET_USER_DATA, data:{userId,email,login, isAuth}})

export const getAuthUserData = () => async(dispatch) => {
   let responce=await authAPI.me()
      if (responce.data.resultCode === 0) {
      let {userId,email,login} = responce.data.data;
      dispatch(setUserData(userId,email,login,true))
    }
    
  }

  export const login = (email,password,rememberMe) => async(dispatch) => {
    let responce=await authAPI.login(email,password,rememberMe);
      if (responce.data.resultCode === 0) {
      dispatch(getAuthUserData())
    }    
  }

  export const logout = () => async(dispatch) => {
    let responce=await authAPI.logout();    
      if (responce.data.resultCode === 0) {
      dispatch(setUserData(null,null,null,false))
    }
    
  }


export default authReducer;