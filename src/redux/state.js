export let subscribe = (observer)=>  {
  callSubscriber = observer;
}

let state = {
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
        newMessageText:'myMessage',
        },
      }
    
    export let callSubscriber= () =>{
      console.log('State')
    }
    //posts
    export let addPost = () =>  {
      let newPost = {
      id:5,
      message: state.profilePage.newPostText,
      likesCount:0,
      }
      state.profilePage.posts.push(newPost);
      state.profilePage.newPostText ='';
      callSubscriber(state);
    }
    export let updateNewPostText = (newText) =>  {
      state.profilePage.newPostText= newText;
      callSubscriber(state);
    }
    //message
    export let addMessage = () => {
      let newMessage ={
        id:5,
        message:state.messagesPage.newMessageText,
      }
      state.messagesPage.messages.push(newMessage);
      callSubscriber(state);
    }
    export let updateNewMessageText = (text) => {
      state.messagesPage.newMessageText = text;
      callSubscriber(state);
    }
   



export default state;
