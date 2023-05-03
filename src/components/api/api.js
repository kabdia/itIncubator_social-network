import axios from 'axios'

const instans = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'92690937-6791-452a-8eb3-fd7d2775152c'
    }
})
const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const usersAPI = {
    getUsers(currentPage=1,pageSize=10)  {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`).then(
        response=>{return response.data}        
    )
    },
    follow(userId) {
        return instans.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instans.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },
    
}

export const profileAPI = {    
    getProfile(userId){
        return instans.get(`profile/`+userId)
    },
    getStatus(userId){
        return instans.get(`profile/status/`+userId)
    },
    updateStatus(status){
        return instans.put(`profile/status/`,{status:status})  
    }
    
}

export const authAPI = {
    me(){
        return instans.get(`auth/me`)
    },  
    login(email,password,rememberMe=false){
        return instans.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return instans.delete('auth/login')
    }

}

