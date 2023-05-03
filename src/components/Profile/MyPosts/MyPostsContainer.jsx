import React from 'react';
import {addPostToWall} from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthComponent } from '../../hoc/withAuthRedurect';

 const mapStateToProps = (state) => {
   return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
   }
 }

const mapDispatchToProps = (dispatch)=>{
  return {
    addPost:(post) => {
      dispatch(addPostToWall(post))
    }
  }
}
      

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthComponent)(MyPosts)
