import { combineReducers } from "redux";
import authReducer from "./auth";
import profileReducer from "./profile";
import postReducer from "./post";
import modelReducer from "./model";
import filterReducer from "./filter"

export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
    model: modelReducer,
    filter: filterReducer
});