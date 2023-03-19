import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    debugger
    let dialogsElement = props.messagesPage.dialogs.map(d => (<DialogsItem name ={d.name} id={d.id}/>))
    let messagesElements = props.messagesPage.messages.map(m => (<Message message={m.message}/>));
    let newMessage = React.createRef();
    let sendMessage = () => {
        let message = newMessage.current.value;
        props.addMessage(message);
    }
    
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}                
            </div>
            <div className={style.messages}>
                {messagesElements}               
                <div>                    
                <textarea onChange={onMessageChange} value ={props.messagesPage.newMessageText} ref ={newMessage}/>
                </div>
                <div>
                <button onClick={sendMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
    
}

export default Dialogs; 
