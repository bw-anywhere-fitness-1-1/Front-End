import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ClassesReducer from './classesReducer'

export default combineReducers({
  UserReducer,
  ClassesReducer,
});