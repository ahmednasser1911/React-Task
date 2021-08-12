import { combineReducers } from "redux";
import { contentReducer, selectedContentReducer } from "./contentReducer.js";

export const reducers = combineReducers({
  content: contentReducer,
  selectedContent: selectedContentReducer,
});
