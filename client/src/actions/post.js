import axios from "axios";
import{
    GET_POSTS,
    POST_ERROR,
    ADD_LIKES,
    CLEAR_POSTS,
    DELETED_POST,
    ADD_POST
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
        dispatch({
            type: POST_ERROR,
            error:{
                message: err.response.data.error,
                statusCode : err.response.status
            }
        })
    }
}

export const deletePost = id => async dispatch =>{
    try{
        await axios.delete(`/api/v1/posts/${id}`);
        dispatch({
            type: DELETED_POST,
            data: id
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

export const addPost = text => async dispatch =>{
    const config = {
        headers:{
            'Content-Type': "application/json"
        }
    }
    const body = JSON.stringify({ text });
    try{
        const res = await axios.post("/api/v1/posts", body, config);
        dispatch({
            type: ADD_POST,
            data: res.data
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