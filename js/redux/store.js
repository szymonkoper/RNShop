import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import Cart from '../models/Cart';

const reducer = (state, action) => state;

const state = {
  currentText: 'Current123',
  archivedText: 'ArchivedABC',
  carts: [
    new Cart('Groceries for today', 2, []),
    new Cart('Car repair tools', 4, []),
    new Cart('date with girlfriend', 7, []),
  ],
};

function configureStore(initialState = state) {
  return createStore(reducer, initialState, applyMiddleware(logger));
}

export default configureStore();
