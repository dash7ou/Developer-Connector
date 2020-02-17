import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    CHANGE_LOADING,
    CREATE_PROFILE
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
                error: null
            }
        case PROFILE_ERROR:
            return{
                ...state,
                error: action.error.message,
                loading: false
            }
        case CHANGE_LOADING:
            return{
                ...state,
                loading: true
            }
        case CREATE_PROFILE:
            return{
                ...state,
                loading: false,
                profile: action.data
            }
        case CLEAR_PROFILE:
            return{
                ...initialState,
            }
        default:
            return state
    }
}