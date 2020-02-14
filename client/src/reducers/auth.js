import {
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from "../actions/type";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
}

export default (state= initialState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.token)
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.data
            }
        case REGISTER_FAIL:
            localStorage.removeItem("token")
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                token: null
            }
        default:
            return state
    }
}