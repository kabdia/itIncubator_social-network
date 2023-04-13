const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState ={
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
newMessageText:''
} 

const dialogsReducer = (state = initialState,action) => {
  
  

    switch (action.type){
        case 'ADD-MESSAGE':
            let newMessage ={
                id:5,
                message:state.newMessageText,
              }
              return {
                ...state,
                messages:[...state.messages, newMessage],
                newMessageText:'',
            };
                     
              
            
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,                
                newMessageText:action.newText               
            };
            
            
        
        default:
            return state;
    }

     
}

    export const addMessageActionCreator = (message) => 
    ({type:ADD_MESSAGE, newText:message}) ;
      
    export const updateNewMessageTextActionCreator = (text) => 
    ({type:UPDATE_NEW_MESSAGE_TEXT, newText:text}) 

export default dialogsReducer;