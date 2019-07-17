import * as actionTypes from './actionTypes';
import * as api from '../../api/api';

export const loadForms = forms => ({
  type: actionTypes.LOAD_FORMS,
  payload: {
    forms,
  },
});

export const getForms = () => (
  (dispatch, getState) => {
    const { apiKey } = getState().auth;
    api.getForms(apiKey, (response) => {
      dispatch(loadForms(response.data.content));
    });
  }
);

export const selectForm = selectedForm => ({
  type: actionTypes.SELECT_FORM,
  payload: {
    selectedForm,
  },
});
