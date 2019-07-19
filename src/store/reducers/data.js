/* eslint-disable no-case-declarations */
import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';
import { chartBackgroundColors } from '../../constants/constants';

const initialState = {
  forms: [],
  selectedForm: {},
  isContentLoading: false,
  chartBackgroundColors,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FORMS:
      return updateObject(state, { forms: action.payload.forms });
    case actionTypes.SELECT_FORM:
      return updateObject(state, { selectedForm: action.payload.selectedForm });
    case actionTypes.SET_CONTENT_LOADING:
      return updateObject(state, { isContentLoading: action.payload.isContentLoading });
    case actionTypes.SET_CHART_BACKGROUND_COLORS:
      return updateObject(state, { chartBackgroundColors: action.payload.colors });
    case actionTypes.SET_CHART_BACKGROUND_COLOR:
      const colors = state.chartBackgroundColors.slice();
      colors[action.payload.index] = action.payload.color;
      return updateObject(state, { chartBackgroundColors: colors });
    default:
      return state;
  }
};

export default dataReducer;
