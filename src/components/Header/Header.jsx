import React from 'react';
import classes from'./Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
        <div className={classes.header__logo}>
        <img className={classes.img} alt ='logo'src="https://cdn-icons-png.flaticon.com/512/1818/1818483.png"/>
        <p className={classes.logo__name}>LoveCats</p>
        </div>
      </header>
    )
}

export default Header;