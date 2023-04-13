import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    debugger
    let dialogsElement = props.messagePage.dialogs.map(d => (<DialogsItem name ={d.name} key={d.id} id={d.id}/>))
    let messagesElements = props.messagePage.messages.map(m => (<Message message={m.message} key={m.id}/>));
    
    let sendMessage = () => {        
        props.sendNewMessage();
    }
    
    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateMessageChange(text);
    }
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}                
            </div>
            <div className={style.messages}>
                {messagesElements}               
                <div>                    
                <textarea 
                    onChange={onMessageChange} 
                    placeholder='Введи сообщение' 
                    value ={props.messagePage.newMessageText} />
                </div>
                <div>
                <button onClick={sendMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
    
}

export default Dialogs; 
