import axios from "axios";
import { Notification } from "rsuite"
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
        // Notification.success({
        //     title: `Welcome Again ${res.data.user.name}`,
        //     placement:"topEnd",
        //     description: "If you need any help you can conntact with admin and we hope you be happy with our service"
        // })
    }catch(err){
        if(err.response.status === 404){
            Notification.warning({
                title: "Create Profile",
                placement:"topEnd",
                description: "You need to create your profile."
            });
        }
        dispatch({
            type: PROFILE_ERROR,
            error: {
                message: err.response.data.error,
            }
        })
    }
    
}

export const setLoading = _ => dispatch=>{
    dispatch({
        type: CHANGE_LOADING
    })
}


export const clearProfile = _ => dispatch =>{
    dispatch({
        type: CLEAR_PROFILE
    })
}