import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchPostsStarted, fetchPostsSuccess, fetchPostsFailure} from '../redux/actions/postActions'
import axios from "axios";
import {fetchPosts} from '../redux/actions/postActions'


const PostApp = () => {

    const {loading, posts, error} = useSelector(state => state);
    console.log({loading, posts, error});
    const dispatch = useDispatch();


    // useEffect(()=>{
    //   dispatch(fetchPostsStarted())
    //   axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
    //   .then(response => dispatch(fetchPostsSuccess(response.data)))
    //   .catch(err => dispatch(fetchPostsFailure(err.message)))
    // },[])

    useEffect(()=>{
          dispatch(fetchPosts())
    },[])


    return(
        <div>
             {
                posts.length>0 && (
                    posts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    ))
                )
             }
        </div>
    )
}

export default PostApp;


