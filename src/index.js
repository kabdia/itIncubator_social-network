import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './redux/state';
import {addPost,updateNewPostText,addMessage, updateNewMessageText, subscribe} from './redux/state';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let callSubscriber = (state) => {


    root.render(
      <React.StrictMode>
        <App 
        state = {state} 
        addPost={addPost} 
        updateNewPostText={updateNewPostText} 
        addMessage={addMessage}
        updateNewMessageText = {updateNewMessageText}    />
      </React.StrictMode>
    );
    }
    
    callSubscriber(state);
    subscribe(callSubscriber)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
