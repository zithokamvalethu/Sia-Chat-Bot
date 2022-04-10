// import { messagesReducer } from "./messages/messagesReducer";
import {usersReducer, messagesReducer } from "./messageReducer/chatsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  messages: messagesReducer,
  users:usersReducer,
  
});

export default rootReducer;
