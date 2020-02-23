import {
    GET_POSTS,
    POST_ERROR,
    ADD_LIKES,
    CLEAR_POSTS,
    DELETED_POST,
    ADD_POST,
    GET_POST,
    CLEAR_POST
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
        case ADD_LIKES:
            const posts =state.posts.map(post => {
                if(post._id.toString() === action.post) {
                    post.likes = post.likes.map(like => like.user? like.user.toString(): like)
                    if(post.likes.includes(action.user)){
                        post.likes= [ ...post.likes.filter(like => like !== action.user) ]
                        return post
                    }
                    post.likes = [
                        action.user,
                        ...post.likes
                    ]
                    return post

                }
                return post
            })
            return{
                ...state,
                loading:false,
                errors: null,
                posts
            }
        case ADD_POST:
            return{
                ...state,
                loading: false,
                posts: [
                    ...state.posts,
                    action.data
                ]
            }
        case DELETED_POST:
            return{
                ...state,
                loading:false,
                errors: null,
                posts: [...state.posts.filter(post => post._id.toString() === action.data)]
            }
        case GET_POST:
            return{
                ...state,
                post: action.data,
                loading: false,
                error: null
            }
        case CLEAR_POST:
            return{
                ...state,
                post: null,
                loading: false,
                error: null
            }
        case CLEAR_POSTS:
            return initialState
        default:
            return state
    }
}