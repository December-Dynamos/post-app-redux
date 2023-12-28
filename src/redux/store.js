
import { createStore, applyMiddleware } from 'redux';
import postReducer from './reducers/postReducer';
import {thunk}  from "redux-thunk"

const store = createStore(postReducer, applyMiddleware(thunk));


export default store;




//  dispatch(fetchPosts())


// (diaptach)=>{
//     dispatch(fetchPostsStarted())
//     axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//     .then(response => dispatch(fetchPostsSuccess(response.data)))
//     .catch(err => dispatch(fetchPostsFailure(err.message)))
//   }