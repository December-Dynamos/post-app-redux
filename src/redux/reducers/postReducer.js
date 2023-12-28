
import {FETCH_POSTS_STARTED, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from '../actions/actionType';

const initialState = {
    loading: false,
    posts: [],
    error: null
}

const postReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCH_POSTS_STARTED:  return {...state, loading: true};
        case FETCH_POSTS_SUCCESS: return {...state, loading:false, posts: action.payload, error: null};
        case FETCH_POSTS_FAILURE: return {...state, loading:false, error: action.payload, posts: []};
        default: return state;
    }
}


export default postReducer;
