import {
    OPEN_MODEL,
    CLOSE_MODEL
} from "./type";

export const openModel = (modalType)=> dispatch=>{
    dispatch({
        type: OPEN_MODEL,
        payload: modalType
    })
}

export const closeModel = ()=> dispatch=>{
    dispatch({
        type: CLOSE_MODEL
    })
}