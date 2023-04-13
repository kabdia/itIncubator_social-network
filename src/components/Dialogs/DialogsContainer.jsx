import React from 'react';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    
    return {
        messagePage:state.messagesPage        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage:() => {
            dispatch(addMessageActionCreator());
        },
        updateMessageChange:(text) => {
            let action =updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer; 
