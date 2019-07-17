import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  isAuthenticated: false,
  apiKey: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_AUTHENTICATED:
      return updateObject(state, { isAuthenticated: action.payload.isAuthenticated });
    case actionTypes.SET_APIKEY:
      return updateObject(state, { apiKey: action.payload.apiKey });
    default:
      return state;
  }
};

export default authReducer;
