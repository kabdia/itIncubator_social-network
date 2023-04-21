import React from 'react';
import Header from './Header';
import axios from 'axios';
import {setUserData} from './../../redux/auth-reducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(responce => {
          if (responce.data.resultCode === 0) {
          let {id, login, email} = responce.data.data;
          this.props.setUserData(id, login, email)
        }
        })
        
    }
    
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps,{setUserData})(HeaderContainer);