import { combineReducers } from "redux";
import authReducers from "./authReducers";
import eventReducers from "./eventReducers";

export const reducers = combineReducers({ authReducers, eventReducers });