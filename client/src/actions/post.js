import axios from "axios";
import{
    GET_POSTS,
    POST_ERROR,
    ADD_LIKES,
    CLEAR_POSTS
}from "./type";


export const getPosts = _ => async dispatch =>{
    try{
        const res = await axios.get('/api/v1/posts');
        dispatch({
            type: GET_POSTS,
            data: res.data
        })
    }catch(err){
        dispatch({
            type: POST_ERROR,
            error:{
                message: err.response.data.error,
                statusCode : err.response.status
            }
        })
    }
}

export const addLiked = (post, user) => async dispatch =>{
    try{
        const res = await axios.put(`/api/v1/posts/liked/${post}`);
        dispatch({
            type: ADD_LIKES,
            user,
            post
        })
    }catch(err){
        console.log(err)
        dispatch({
            type: POST_ERROR,
            error:{
                message: err.response.data.error,
                statusCode : err.response.status
            }
        })
    }
}


export const clearPosts = ()=> dispatch =>{
    dispatch({
        type: CLEAR_POSTS
    })
}