// import { messagesReducer } from "./messages/messagesReducer";
import { combineReducers } from "redux";
import { messageReducer } from "./messageReducer/chatsReducer";

const rootReducer = combineReducers({
  messages: messageReducer,
  // users:usersReducer,
});

export default rootReducer;
