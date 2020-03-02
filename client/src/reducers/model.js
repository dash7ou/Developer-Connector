import {
    OPEN_MODEL,
    CLOSE_MODEL
} from "../actions/type";

const initialState = {
    show: false
}

export default (state= initialState, action)=>{
    switch(action.type){
        case OPEN_MODEL:
            return{
                ...state,
                show: true
            }
        case CLOSE_MODEL:
            return{
                ...state,
                show: false
            }
        default:
            return initialState
    }
}