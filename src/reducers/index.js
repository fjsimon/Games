import {combineReducers} from 'redux';

import {SELECT} from '../actions/select';
import {SELECT_POSITION} from '../actions/connect-four/select';
import {END_GAME} from '../actions/end-session';

const isSelected = (state = '', action) => {
  switch(action.type) {
    case SELECT:
      return action.isSelected;
    default:
      return state;
  }
};

const selectPosition = (state = '', action) => {
  switch(action.type) {
    case SELECT_POSITION:
      return action.position;
    default:
      return state;
  }
};

const connectFour = combineReducers({
  selectPosition
});

const uiState = combineReducers({
  isSelected
});

const appReducer = combineReducers({
  uiState,
  connectFour
});

const rootReducer = (state, action) => {

  if(action.type === END_GAME) {
    state = undefined;
  }
  return appReducer(state, action)
};

export default rootReducer;
