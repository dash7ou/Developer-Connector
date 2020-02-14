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
        default:
            return state
    }
}