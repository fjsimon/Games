import {combineReducers} from 'redux';

import {SELECT} from '../actions/select';
import {END_GAME} from '../actions/end-session';

const isSelected = (state = '', action) => {

  switch(action.type) {
    case SELECT:
      return action.isSelected;
    default:
      return state;
  }

};

const uiState = combineReducers({
  isSelected
});

const appReducer = combineReducers({
  uiState
});

const rootReducer = (state, action) => {

  if(action.type === END_GAME) {
    state = undefined;
  }
  return appReducer(state, action)
};

export default rootReducer;
