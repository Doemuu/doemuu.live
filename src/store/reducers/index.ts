import { combineReducers } from "redux";
import counterReducer from "./counterReducers";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
