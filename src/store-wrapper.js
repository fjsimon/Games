import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export class StoreWrapper {

  constructor() {

    let middlewares = [thunk],
        composeEnhancers = compose;
    if(process.env.NODE_ENV !== 'production') {
      middlewares.push(require('redux-immutable-state-invariant')());
      if(!!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
      }
    }

    this.store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
  }
}
