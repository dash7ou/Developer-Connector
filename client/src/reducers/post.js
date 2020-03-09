import {
    GET_POSTS,
    POST_ERROR,
    ADD_LIKES,
    CLEAR_POSTS,
    DELETED_POST,
    ADD_POST,
    GET_POST,
    CLEAR_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    ADD_POST_SOCKET,
    ADD_COMMENT_SOCKET,
    DELETE_POST_SOCKET
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
        case ADD_POST_SOCKET:
        case ADD_COMMENT_SOCKET:
            return{
                ...state,
                loading: false,
                posts: [
                    action.data,
                    ...state.posts
                ]
            }
        case DELETED_POST:
        case DELETE_POST_SOCKET:
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
        case ADD_COMMENT:
            return{
                ...state,
                post:action.data,
                loading: false,
                error: null
            }
        case DELETE_COMMENT:
            return{
                ...state,
                post: {
                    ...state.post,
                    commit:[
                        ...state.post.commit.filter(com => com._id.toString() !== action.comment)
                    ]
                }
            }
        case CLEAR_POSTS:
            return initialState
        default:
            return state
    }
}