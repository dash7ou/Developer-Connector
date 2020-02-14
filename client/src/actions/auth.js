import axios from "axios";
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from "../actions/type";


export const registerUser = data => async dispatch=>{
    const config = {
        headers:{
            'Content-Type': "application/json"
        }
    }
    const body = JSON.stringify({ ...data })
    try{
        const res = await axios("/api/v1/register", body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            data: res.data,
            token: res.headers['x-auth-token']
        })
    }catch(err){
        console.log(err)
        dispatch({
            type: REGISTER_FAIL
        })
    }
}