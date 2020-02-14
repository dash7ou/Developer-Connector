import axios from "axios";
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER,
    AUTH_ERROR
} from "../actions/type";

import setAuthToken from "../utils/setAuthToken"

// load user
export const loadUser = _ => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try{
        const res = await axios.get("/api/v1/auth");
        dispatch({
            LOAD_USER,
            data: res.data
        })
    }catch(err){
        dispatch({
            AUTH_ERROR
        })
    }
}
// register user
export const registerUser = data => async dispatch=>{
    const config = {
        headers:{
            'Content-Type': "application/json"
        }
    }
    const body = JSON.stringify({ ...data })
    try{
        const res = await axios.post("/api/v1/users", body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            data: res.data,
            token: res.headers['x-auth-token']
        })
    }catch(err){
        dispatch({
            type: REGISTER_FAIL,
            errors: err.response.data.error
        })
    }
}

export const clearErrors = _ => dispatch=>(
    dispatch({
        type: CLEAR_ERRORS,
    })
)