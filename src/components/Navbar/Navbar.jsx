import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
      return (<nav className={classes.nav}>
      <div className={classes.item}>        
        <NavLink to="/profile" className={classes.a_style}> <img className={classes.img_style} src="https://cdn-icons-png.flaticon.com/512/6462/6462530.png"/>Мой профиль</NavLink>
      </div>
      <div className={classes.item}>        
        <NavLink to="/dialogs" className={classes.a_style}><img className={classes.img_style} src="https://cdn-icons-png.flaticon.com/512/1818/1818367.png"/>Мои Сообщения</NavLink>
      </div>
      <div className={classes.item}>        
        <NavLink to="#" className={classes.a_style}><img className={classes.img_style} src="https://cdn-icons-png.flaticon.com/512/763/763668.png"/>Новости</NavLink>
      </div>
      <div className={classes.item}>        
        <NavLink to="#" className={classes.a_style}><img className={classes.img_style} src="https://cdn-icons-png.flaticon.com/512/1141/1141149.png"/>Друзья</NavLink>
      </div>
      <div className={classes.item}>        
        <NavLink to="#" className={classes.a_style}><img className={classes.img_style} src="https://cdn-icons-png.flaticon.com/512/763/763662.png"/>Сообщества</NavLink>
      </div>
      <div className={classes.item}>        
        <NavLink to="#" className={classes.a_style}><img className={classes.img_style} src="https://cdn-icons-png.flaticon.com/512/763/763663.png"/>Картинки</NavLink>
      </div>
      <div className={classes.item}>        
        <NavLink to="#" className={classes.a_style}><img className={classes.img_style} src="https://cdn-icons-png.flaticon.com/512/763/763674.png"/>Музыка</NavLink>
      </div>
      <div className={classes.item}>        
        <NavLink to="#" className={classes.a_style}><img className={classes.img_style} src="https://cdn-icons-png.flaticon.com/512/763/763687.png"/>Настройки</NavLink>
      </div>
    </nav>
);
}

export default Navbar;