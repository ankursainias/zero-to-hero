import * as actionTypes from "../actions/ActionTypes";

const initialState = {};

const AuthContext = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_SIGNED_IN:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.TEST:
      return state;
    default:
      return state;
  }
};

export default AuthContext;