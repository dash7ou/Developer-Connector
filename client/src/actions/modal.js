import {
    OPEN_MODEL,
    CLOSE_MODEL
} from "./type";

export const openModel = ()=> dispatch=>{
    dispatch({
        type: OPEN_MODEL
    })
}

export const closeModel = ()=> dispatch=>{
    dispatch({
        type: CLOSE_MODEL
    })
}