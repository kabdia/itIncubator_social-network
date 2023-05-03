const ADD_MESSAGE = 'ADD-MESSAGE';


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
  ]
} 

const dialogsReducer = (state = initialState,action) => {
  
  

    switch (action.type){
        case 'ADD-MESSAGE':
            let newMessage =action.newText
              
              return {
                ...state,
                messages:[...state.messages, {id:4, message:newMessage}],
                
            };
        
            default:
            return state;
    }

     
}

    export const addMessageActionCreator = (message) => 
    ({type:ADD_MESSAGE, newText:message}) ;
      

export default dialogsReducer;