import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import Cart from '../models/Cart';

const reducer = (state, action) => state;

const state = {
  currentText: 'Current123',
  archivedText: 'ArchivedABC',
  carts: [
    new Cart('Groceries for today', 3, []),
    new Cart('build this awesome app', 2, [], true),
    new Cart('date with girlfriend', 7, []),
    new Cart('some very old shopping list', 1, [], true),
    new Cart('Car repair tools', 4, []),
  ],
};

function configureStore(initialState = state) {
  return createStore(reducer, initialState, applyMiddleware(logger));
}

export default configureStore();
