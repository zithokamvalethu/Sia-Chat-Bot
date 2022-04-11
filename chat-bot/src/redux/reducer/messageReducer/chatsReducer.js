import * as actions from "../../actionTypes/index";

const initialState = {
  messages: {},
  users: [],
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case actions.SAVE_BOT_MESSAGE:
      console.log("action", action.payload);
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    // case actions.GET_BOT_MESSAGE:
    //   return {
    //     ...state,
    //     messages: action.payload,
    //   };

    default:
      return state;
  }
};
// export default  messagesReducer;
