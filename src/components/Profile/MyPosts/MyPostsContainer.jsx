import React from 'react';
import {addPost, onPostChange} from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

 const mapStateToProps = (state) => {
   return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
   }
 }


      
const MyPostsContainer = connect(mapStateToProps,{addPost,onPostChange})(MyPosts)

export default MyPostsContainer;