import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  forms: [],
  selectedForm: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FORMS:
      return updateObject(state, { forms: action.payload.forms });
    case actionTypes.SELECT_FORM:
      return updateObject(state, { selectedForm: action.payload.selectedForm });
    default:
      return state;
  }
};

export default dataReducer;
