// import * as actions from "../../actionTypes";
import * as actions from "../../actionTypes/index";

const initialState = {
  messages: [],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case actions.SAVE_SINGLE_CONVO:
      console.log("action", action.payload);
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};
