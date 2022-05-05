import * as actions from "../../actionTypes/index";

let initalState = {
  messages: [],
  solutions: [],
  solution: [],
};
export const messageReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };

    case actions.GET_SOLUTIONS:
      return {
        ...state,
        solutions: action.payload,
      };
    case actions.GET_WEB_SOLUTIONS:
      return {
        ...state,
        solution: [...state.solution, action.payload],
      };

    default:
      return state;
  }
};
// export default  messagesReducer;
