import {
    SET_TEXT_FILTER    
} from "./type";

export const setTextFilter = (text)=> dispatch => {
    dispatch({
        type: SET_TEXT_FILTER,
        text
    })
}
