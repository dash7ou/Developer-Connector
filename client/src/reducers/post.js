import {
    GET_POSTS,
    POST_ERROR
} from "../actions/type";


const initialState = {
    posts: null,
    post: null,
    loading: true,
    errors: null
}

export default (state = initialState, action)=>{
    switch(action.type){
        case GET_POSTS:
            console.log("add posts", action.data)
            return{
                ...state,
                posts: action.data,
                loading: false,
                errors: null
            }
        case POST_ERROR:
            return{
                ...state,
                loading: false,
                errors: action.error
            }
        default:
            return state
    }
}