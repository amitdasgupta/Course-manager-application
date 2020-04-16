import { combineReducers } from "redux";
import courses from "./courseReducers";
import authors from "./authorReducers";
import apiCallInProgress from "./apiStatusReducers";
const rootReducer = combineReducers({
  courses,
  authors,
  apiCallInProgress,
});

export default rootReducer;
