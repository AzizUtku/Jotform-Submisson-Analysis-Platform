import * as actionTypes from './actionTypes';

export const setApiKey = apiKey => ({
  type: actionTypes.SET_APIKEY,
  payload: {
    apiKey,
  },
});

export const setIsAuthenticated = isAuthenticated => ({
  type: actionTypes.SET_IS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});
