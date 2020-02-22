import axios from "axios";
import{
    GET_POSTS,
    POST_ERROR
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