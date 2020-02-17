import {createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState = {};
const middleware = [ thunk ];

function saveToLocalStorage (state){
    try{
        const serialzedState = JSON.stringify(state);
        localStorage.setItem("state", serialzedState)
    }catch(err){
        console.log("error in save")
    }
}

function loadFromLocalStorage(){
    try{
        const serialzedState= localStorage.getItem("state");
        if(serialzedState === null ) return undefined
        return JSON.parse(serialzedState)
    }catch(e){
    }
}

const persistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware( ...middleware ))
);

store.subscribe(()=> saveToLocalStorage(store.getState()))
export default store;