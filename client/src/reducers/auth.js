import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER,
    AUTH_ERROR
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
        case CLEAR_ERRORS:
        case AUTH_ERROR:
            return{
                token: null,
                isAuthenticated: null,
                loading: true,
                user: null,
                message: null,
                errors: null
            }
        default:
            return state
    }
}