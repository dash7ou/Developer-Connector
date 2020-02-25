import axios from "axios";
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER,
    AUTH_ERROR,
    LOGIN_USER,
    LOGIN_FAIL,
    LOGOUT,
    CHANGE_LOADING
} from "../actions/type";
import { Notification } from "rsuite";

import setAuthToken from "../utils/setAuthToken"

// load user
export const loadUser = _ => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try{
        const res = await axios.get("/api/v1/auth");
        if(typeof res.data !== "object"){
            return
        }
        dispatch({
            type: LOAD_USER,
            data: res.data
        })
    }catch(err){
        dispatch({
            type: AUTH_ERROR
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

        await loadUser()

        Notification.success({
            title: "Welcome to our communite",
            placement:"topEnd",
            description: "create your profile and connect with another developers"
        });
    }catch(err){
        dispatch({
            type: REGISTER_FAIL,
            errors: err.response.data.error
        })
    }
}

export const loginUser = data => async dispatch =>{
    const config = {
        headers:{
            'Content-Type': "application/json"
        }
    }
    const body = JSON.stringify({ ...data });
    try{
        const res = await axios.post("/api/v1/auth", body, config);
        dispatch({
            type: LOGIN_USER,
            data: res.data,
            token: res.headers['x-auth-token']
        });

        Notification.success({
            title: `Welcome Again`,
            placement:"topEnd",
            description: "If you need any help you can conntact with admin and we hope you be happy with our service"
        })
    }catch(err){
        dispatch({
            type: LOGIN_FAIL,
            errors: err.response.data.error
        })
    }
}

export const logout = _ => dispatch => (
    dispatch({
        type: LOGOUT
    })
)

export const clearErrors = _ => dispatch=>(
    dispatch({
        type: CLEAR_ERRORS,
    })
)

export const changeLoading = change => dispatch =>{
    dispatch({
        type: CHANGE_LOADING,
        change
    })
}