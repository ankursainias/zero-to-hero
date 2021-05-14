import * as actionTypes from "../actions/ActionTypes";

const initialState = { id: '', release_date: '', title: ''};

const MoiveCollection = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_MOVIES:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.MOVIE_DETAIL:
      return state;
    default:
      return state;
  }
};

export default MoiveCollection;