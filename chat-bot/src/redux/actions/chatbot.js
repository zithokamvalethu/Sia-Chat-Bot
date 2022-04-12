import * as actions from "../actionTypes";
const axios = require("axios");

export const getMessages = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3009/message");
      const messages = response.data;
      dispatch({ type: actions.GET_MESSAGES, payload: messages });
    } catch (e) {
      console.log(e);
    }
  };
};

// export const addBotMessages = (message) => {
//   return async (dispatch) => {
//     const response = await axios.post(
//       "http://localhost:4000/messages",
//       message
//     );
//     const savedConversation = response.data;
//     dispatch({ type: actions.SAVE_MESSAGES, payload: savedConversation });
//   };
// };
module.exports = { getMessages };
