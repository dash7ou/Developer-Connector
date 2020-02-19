import axios from "axios";
import { Notification } from "rsuite"
import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    CHANGE_LOADING,
    CREATE_PROFILE,
    UPDATE_PROFILE,
    ADD_EXPERIENCE,
    Add_EDUCATION,
    DELETE_EDUCATION,
    DELETE_EXPERIENCE
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

export const createProfile = (data) => async dispatch =>{
    try{
        const config = {
            headers:{
                'Content-Type': "application/json"
            }
        }
        const body = JSON.stringify({ ...data });
        const res = await axios.post("/api/v1/profile", body, config);
        dispatch({
            type: CREATE_PROFILE,
            data: res.data
        })
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            error:{
                message: err.response.data.error
            }
        })
    }
}

export const updateProfile = (data) => async dispatch =>{
    try{
        const config = {
            headers:{
                'Content-Type': "application/json"
            }
        }
        const body = JSON.stringify({ ...data });
        const res = await axios.put("/api/v1/profile", body, config);
        dispatch({
            type: UPDATE_PROFILE,
            data: res.data
        });
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            error:{
                message: err.response.data.error
            }
        })
    }
}

export const addExperience = data => async dispatch =>{
    try{
        const config = {
            headers:{
                'Content-Type': "application/json"
            }
        }
        const body = JSON.stringify({ ...data });
        const res = await axios.put("/api/v1/profile/experience", body, config);
        dispatch({
            type: ADD_EXPERIENCE,
            data: res.data
        });
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            error:{
                message: err.response.data.error
            }
        })
    }
}

export const addEducation = data => async dispatch=>{
    try{
        const config = {
            headers:{
                'Content-Type': "application/json"
            }
        }
        const body = JSON.stringify({ ...data });
        const res = await axios.put("/api/v1/profile/education", body, config);
        dispatch({
            type: Add_EDUCATION,
            data: res.data
        });
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            error:{
                message: err.response.data.error
            }
        })
    }
}
export const deleteExperience = id => async dispatch=>{
    try{
        const res = await axios.delete(`/api/v1/profile/experience/${id}`);
        dispatch({
            type: DELETE_EXPERIENCE,
            data: res.data
        });
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            error:{
                message: err.response.data.error
            }
        })
    }

}


// export const deleteEducation = id => async dispatch =>{
//     try{
//         const res = await axios.delete(`/api/v1/profile/education/${id}`);
//         dispatch({
//             type: DELETE_EDUCATION,
//             data: res.data
//         });
//     }catch(err){
//         dispatch({
//             type: PROFILE_ERROR,
//             error:{
//                 message: err.response.data.error
//             }
//         })
//     }

// }


export const deleteEducation => id => async dispatch =>{
    try{
        const res = await axios.delete(`/api/v1/profile/education/${id}`);
        dispatch({
            type: DELETE_EDUCATION,
            data: res.data
        })
    }catch(err){

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