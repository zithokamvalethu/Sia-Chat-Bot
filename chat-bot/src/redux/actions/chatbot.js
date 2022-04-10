import * as actions from "../actionTypes";
// import {messagesReducer, usersReducer} from "../reducer/messageReducer/chatsReducer";
const axios = require("axios");

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response= await axios.get("http://localhost:4000/names");
      const users = response.data;
      dispatch({ type: actions.SAVE_USERS, payload: users});
    } catch (e) {
      console.log(e);
    }
  };
};

export const addBotMessages = (message) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:4000/messages",
      message
    );
    const savedConversation = response.data;
    dispatch({ type: actions.SAVE_MESSAGES, payload: savedConversation });
  };
};
// module.exports = { SAVE_MESSAGES, SAVE_USERS };
