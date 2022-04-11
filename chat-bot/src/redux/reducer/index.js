// import { messagesReducer } from "./messages/messagesReducer";
import { messageReducer } from "./messageReducer/chatsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  messages: messageReducer,
  // users:usersReducer,
});

export default rootReducer;
