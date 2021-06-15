import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postUserId from "./postUserId";

export default combineReducers({
  posts: postReducer,
  users: postUserId,
});
