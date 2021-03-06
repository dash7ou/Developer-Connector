import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER,
    AUTH_ERROR,
    LOGIN_USER,
    LOGIN_FAIL,
    LOGOUT,
    CHANGE_LOADING
} from "../actions/type";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    message: null,
    errors: null
}

export default (state= initialState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_USER:
            localStorage.setItem("token", action.token)
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                message: action.data.message,
                token: action.token,
                user: null,
                errors: null
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            localStorage.removeItem("token")
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                token: null,
                errors: action.errors,
                message: null
            }
        case LOAD_USER:
            return {
                ...state,
                loading: false,
                user: action.data,
                isAuthenticated: true
            }
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem("token")
            localStorage.removeItem("state")
            return{
                token: null,
                isAuthenticated: null,
                loading: false,
                user: null,
                message: null,
                errors: null
            }
        case CLEAR_ERRORS:
            return{
                token: null,
                isAuthenticated: null,
                loading: false,
                user: null,
                message: null,
                errors: null
            }
        case CHANGE_LOADING:
            return{
                ...state,
                loading: action.change
            }
        default:
            return state
    }
}