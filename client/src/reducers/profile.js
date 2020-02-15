import {
    GET_PROFILE,
    PROFILE_ERROR
} from "../actions/type";


const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: null,
    error: null
}


export default (state = initialState, action)=>{
    switch(action.type){
        case GET_PROFILE:
            return{
                ...state,
                profile: action.data,
                loading: false,
            }
        case PROFILE_ERROR:
            return{
                ...state,
                error: action.error.message,
                loading: false
            }
        default:
            return state
    }
}