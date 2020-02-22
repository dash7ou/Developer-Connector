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
    DELETE_EXPERIENCE,
    GET_PROFILES,
    GET_REPOS,
    GET_PROFILEBYID,
    CLEAR_REPOS
} from "../actions/type";


const initialState = {
    profile: null,
    profiles: [],
    repos: null,
    showProfile: null,
    loading: true,
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
        case UPDATE_PROFILE:
        case ADD_EXPERIENCE:
        case Add_EDUCATION:
        case DELETE_EXPERIENCE:
        case DELETE_EDUCATION:
            return{
                ...state,
                loading:false,
                profile: action.data
            }
        case GET_PROFILES:
            return{
                ...state,
                loading: false,
                profiles: action.data
            }
        case GET_REPOS:
            return{
                ...state,
                loading: false,
                repos: action.data
            }
        case GET_PROFILEBYID:
            return{
                ...state,
                loading: false,
                showProfile: action.data
            }
        case CLEAR_PROFILE:
            return{
                ...initialState,
            }
        case CLEAR_REPOS:
            return {
                ...state,
                repos: null,
                showProfile: null
            }
        default:
            return state
    }
}