import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter/counterSlice";
import formReducer from "./modules/form/formSlice";

export const reducersList = combineReducers({
  counter: counterReducer,
  form: formReducer,
});
