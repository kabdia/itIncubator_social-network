import React from 'react';
import classes from'./Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
          <div className={classes.header__container}>
        <div className={classes.header__logo}>
        <img className={classes.header__logo_img} alt ='logo'src="https://cdn-icons-png.flaticon.com/512/1818/1818483.png"/>
        <p className={classes.header__logo_name}>LoveCats</p>
        </div>
        <div className={classes.header__login}>
          {props.isAuth ? props.login 
          :<NavLink to={'/login'} className={classes.header__login_link}>Войти</NavLink>}
        </div>
        </div>
      </header>
    )
}

export default Header;