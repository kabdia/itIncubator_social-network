import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';



const App = (props) => {
  
    return (<BrowserRouter>
    <div className='app-wrapper'>
     <Header  />    
    <Navbar  />  
    <div className ='app-wrapper-content'> 
    
    <Routes>    
       
    <Route path="/profile" element = {<Profile profilePage={props.state.profilePage}  addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
    <Route path="/dialogs/*" element = {<Dialogs messagesPage={props.state.messagesPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} />} />    
    </Routes> 
    </div>
    
    </div>
    </BrowserRouter>
    
  );
 
}




export default App;
