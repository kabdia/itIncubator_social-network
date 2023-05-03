import React from 'react';
import {addMessageActionCreator} from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthComponent } from '../hoc/withAuthRedurect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    
    return {
        messagePage:state.messagesPage,              
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage:(value) => {
            dispatch(addMessageActionCreator(value));
        },
        
    }
}





export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthComponent
)(Dialogs); 
