import axios from "axios";
import{
    GET_POSTS,
    POST_ERROR,
    ADD_LIKES,
    CLEAR_POSTS,
    DELETED_POST,
    ADD_POST,
    GET_POST,
    CLEAR_POST,
    ADD_COMMENT,
    DELETE_COMMENT
}from "./type";

import { Notification } from "rsuite";



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

        Notification.success({
            title: "Delete Post",
            placement:"topEnd",
            description: "deleted post suceess."
        });
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

        Notification.success({
            title: "Add Post",
            placement:"topEnd",
            description: "Add post success, now other user can like and add comment to your post"
        });
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


export const getPost = id => async dispatch=>{
    try{
        const res = await axios.get(`/api/v1/posts/${id}`);
        dispatch({
            type: GET_POST,
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

export const addComment = (text, post) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type': "application/json"
        }
    }
    const body = JSON.stringify({ text });
    try{
        const res = await axios.post(`/api/v1/posts/commit/${post}`, body, config);
        dispatch({
            type: ADD_COMMENT,
            data: res.data
        })

        Notification.success({
            title: "Add Comment",
            placement:"topEnd",
            description: "Add comment success, now other user can see it"
        });
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

export const clearPost = _ => dispatch=>{
    dispatch({
        type: CLEAR_POST
    })
}

export const clearPosts = ()=> dispatch =>{
    dispatch({
        type: CLEAR_POSTS
    })
}