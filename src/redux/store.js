import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as SignupReducer } from "../redux/Signup/reducer";
import { reducer as LoginReducer } from "../redux/Login/reducer";

import { reducer } from "./reducer";
const rootReducer = combineReducers({ reducer, SignupReducer, LoginReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
