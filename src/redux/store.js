import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';

let store = {
      _state: {
    profilePage: {
        posts: [
          {id:1, message:"Подрал обои, я доволен собой", likesCount:12,},
          {id:2, message:"Сегодня ел и спал", likesCount:15,},     
          ], 
        newPostText:'it-kamasutra.com',        
    },
    messagesPage:{
        dialogs: [
            {id:1, name:'Барсик'},
            {id:2, name:'Киса'},
            {id:3, name:'Полосатик'},    
          ],
        messages: [
            {id:1, message:'Привет'},
            {id:2, message:'Как дела'},
            {id:3, message:'Что нового'},    
          ],
        newMessageText:'',
        },
      },
      _callSubscriber () {
      console.log('State')
      },

      getState(){
        return this._state;
      },      
      subscribe (observer) {
        this._callSubscriber = observer;
      },
            
      dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.messagesPage=dialogsReducer(this._state.messagesPage, action); 
        this._callSubscriber(this._state);
}
}
 
export default store;
