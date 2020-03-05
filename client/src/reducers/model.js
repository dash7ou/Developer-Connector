import {
    OPEN_MODEL,
    CLOSE_MODEL
} from "../actions/type";

const initialState = {
    showMessageDeleted: false,
    showUpdateEdu: false,
    showUpdateExp: false
}

export default (state= initialState, action)=>{
    const{
        type,
        payload
    } = action
    switch(type){
        case OPEN_MODEL:
            console.log(payload)
            if(payload === "deleted"){
                return{
                    ...state,
                    showMessageDeleted: true
                }
            } else if(payload === "edu"){
                return{
                    ...state,
                    showUpdateEdu: true
                }
            }else if(payload === "exp"){
                return{
                    ...state,
                    showUpdateExp: true
                }
            }else{
                return initialState
            }
        case CLOSE_MODEL:
            return initialState
        default:
            return initialState
    }
}