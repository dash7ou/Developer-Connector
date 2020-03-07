import {
    SET_TEXT_FILTER
} from "../actions/type"

const initialState ={
    text: ""
}


export default (state = initialState , action)=>{
    switch(action.type){
        case SET_TEXT_FILTER:
            return{
                ...state, 
                text: action.text
            }
        default:
            return state
    }
}