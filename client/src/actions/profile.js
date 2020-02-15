import axios from "axios";
import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    CHANGE_LOADING
} from "./type";


// user get his profile
export const getProfile = _ => async dispatch =>{
    try{
        dispatch({
            type: CHANGE_LOADING
        })
        const res = await axios.get("/api/v1/profile/me");
        dispatch({
            type: GET_PROFILE,
            data: res.data
        })
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            error: {
                message: err.response.data.error,
            }
        })
    }
    
}



export const clearProfile = _ => dispatch =>{
    dispatch({
        type: CLEAR_PROFILE
    })
}