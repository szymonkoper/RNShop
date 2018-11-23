import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './reducer';
import initialState from './initialState';


};

function configureStore(initialState = state) {
  return createStore(reducer, initialState, applyMiddleware(logger));
}

export default configureStore();
