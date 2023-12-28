
import {FETCH_POSTS_STARTED, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from './actionType';

import axios from 'axios';

// import { useDispatch } from 'react-redux';

// cost dispatch = useDispatch()


export const fetchPostsStarted = () => {
    return{
    type: FETCH_POSTS_STARTED
}
}

export const fetchPostsSuccess = (data) => {
     return{
    type: FETCH_POSTS_SUCCESS,
    payload: data
}}

export const fetchPostsFailure = (error) => {
    return{
       type: FETCH_POSTS_FAILURE,
       payload: error
    }
    
}


// pseudo action creator

// export function fetchPosts(){
//       dispatch(fetchPostsStarted())
//       axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//       .then(response => dispatch(fetchPostsSuccess(response.data)))
//       .catch(err => dispatch(fetchPostsFailure(err.message)))
// }



export function fetchPosts(){
    return (dispatch)=>{
      dispatch(fetchPostsStarted())
      axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
      .then(response => dispatch(fetchPostsSuccess(response.data)))
      .catch(err => dispatch(fetchPostsFailure(err.message)))
    }
}




















// pseudo code. Proxy





{/* <div> 
<A /> 
<B /> 
<C />  
</div>


<div></div> */}