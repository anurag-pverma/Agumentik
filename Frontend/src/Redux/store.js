import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {reducer} from "./AuthReducer/reducer";
// import {reducer as AppReducer} from "./AppReducer/reducer";
import thunk from "redux-thunk";

// const rootReducer = combineReducers({AuthReducer})


const store = legacy_createStore(reducer,applyMiddleware(thunk))


export {store}