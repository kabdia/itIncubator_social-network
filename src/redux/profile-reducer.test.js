import profileReducer, { addPostToWall, deletePost } from "./profile-reducer";

let state = {
  posts: [
    {id:1, message:"Подрал обои, я доволен собой", likesCount:12,},
    {id:2, message:"Сегодня ел и спал", likesCount:15,},     
    ]  
}

test('lenght of posts should be incremented', () => {
  //test data
  let action = addPostToWall('it-camasutra')

//action
  let newState=profileReducer(state,action);

//expectation

expect(newState.posts.length).toBe(3) 

});

test('message of new post should be correct', () => {
//test data
  let action = addPostToWall('it-camasutra')  

//action
  let newState=profileReducer(state,action);

//expectation


expect(newState.posts[2].message).toBe('it-camasutra')
});

test('after deleting lenght of messages should be decrement', () => {
  //test data
    let action = deletePost(1)  
  
  //action
    let newState=profileReducer(state,action);
  
  //expectation
  
  
  expect(newState.posts.length).toBe(2)
  });


