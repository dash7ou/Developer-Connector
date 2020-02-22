import {
    GET_POSTS,
    POST_ERROR,
    ADD_LIKES,
    CLEAR_POSTS,
    DELETED_POST
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
                        ...post.likes,
                        action.user
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
        case CLEAR_POSTS:
            return initialState
        default:
            return state
    }
}