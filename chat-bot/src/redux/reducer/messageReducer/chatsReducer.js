
import * as actions from "../../actionTypes/index";

const initialState = {
  messages: {},
  users:[],

};

export  const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    }

  }
  
    export  const usersReducer = (state = initialState, action) => {
        switch (action.type) {
          case actions.SAVE_USERS:
            return {
                     ...state,
                       users: [...state.users, action.payload],
                     };
                     default:
                            return state;
          
          }}
// export default  {messagesReducer, usersReducer};