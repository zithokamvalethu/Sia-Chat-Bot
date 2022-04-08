import * as actions from "../actionTypes";
const SAVE_MESSAGES = "SAVE_MESSAGE";
const SAVE_SINGLE_CONVO = "SAVE_SINGLE_CONVO";
const axios = require("axios");

export const getMessages = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/messages");
      const messages = response.data;
      dispatch({ type: actions.SAVE_MESSAGES, payload: messages });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addConversation = (message) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:4000/messages",
      message
    );
    const savedConversation = response.data;
    dispatch({ type: actions.SAVE_SINGLE_CONVO, payload: savedConversation });
  };
};
module.exports = { SAVE_MESSAGES, SAVE_SINGLE_CONVO };
