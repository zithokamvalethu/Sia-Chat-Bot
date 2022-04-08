// import { messagesReducer } from "./messages/messagesReducer";
import { messagesReducer } from "./messageReducer/messagesReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  messages: messagesReducer,
});

export default rootReducer;
