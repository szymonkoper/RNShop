import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const reducer = (state, action) => state;

const state = {
  currentText: 'Current123',
  archivedText: 'ArchivedABC',
};

function configureStore(initialState = state) {
  return createStore(reducer, initialState, applyMiddleware(logger));
}

export default configureStore();
