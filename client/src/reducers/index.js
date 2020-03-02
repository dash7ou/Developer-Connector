import { combineReducers } from "redux";
import authReducer from "./auth";
import profileReducer from "./profile";
import postReducer from "./post";
import modelReducer from "./model";

export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
    model: modelReducer
});