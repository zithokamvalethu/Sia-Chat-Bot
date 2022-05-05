import * as actions from "../actionTypes";

export const getMessages = (data) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_MESSAGES, payload: data });
    try {
      dispatch({ type: actions.GET_MESSAGES, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};
// export const example = (data) => {
//   console.log("chair", data);
//   return (dispatch) => {
//     dispatch({ type: actions.EXAMPLE, payload: data });
//   };
// };
export const getSolutions = (solutions) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actions.GET_SOLUTIONS, payload: solutions });
    } catch (e) {
      console.log(e);
    }
  };
};
export const getFirstWebSolutions = (solution) => {
  console.log("get first web solution", solution);
  return async (dispatch) => {
    // dispatch({ type: actions.GET_WEB_SOLUTIONS, payload: solution });
    try {
      dispatch({ type: actions.GET_WEB_SOLUTIONS, payload: solution });
    } catch (e) {
      console.log(e);
    }
  };
};

// // export const addBotMessages = (message) => {
// //   return async (dispatch) => {
// //     const response = await axios.post(
// //       "http://localhost:4000/messages",
// //       message
// //     );babel.config.js:
// //     const savedConversation = response.data;
// //     dispatch({ type: actions.SAVE_MESSAGES, payload: savedConversation });
// //   };
// // };
// // module.exports = { getMessages };
