import React, { Suspense } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'
import Preloader from './components/common/Preloader/Preloarer';
import { lazy } from 'react';
const UsersContainer = lazy(()=> import('./components/Users/UsersContainer'))

const App = (props) => {    

    return (<BrowserRouter>
    <div className='app-wrapper'>
     <HeaderContainer  />    
    <Navbar  />  
    <div className ='app-wrapper-content'> 
    <Suspense fallback={<div><Preloader/></div>}>
    <Routes>    
    <Route path='/profile/' element={<ProfileContainer/>}>
    <Route path=':userId/*' element={<ProfileContainer/>}/>
    </Route> 
    <Route path="/dialogs/*" element = {<DialogsContainer />} />  
    <Route path="/users" element = {<UsersContainer />} />
    <Route path="/login" element={<Login />}/>
    </Routes> 
    </Suspense>
    </div>
    
    </div>
    </BrowserRouter>
    
  );
 
}




export default App;
