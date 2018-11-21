import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import moment from 'moment';
import Cart from '../models/Cart';
import reducer from './reducer';

const state = {
  carts: [
    new Cart('Groceries for today', moment(1318874398806).toISOString(), []),
    new Cart('build this awesome app', moment(1318074398806).toISOString(), [], true),
    new Cart('date with girlfriend', moment(1319874398806).toISOString(), []),
    new Cart('some very old shopping list', moment(1308074398806).toISOString(), [], true),
    new Cart('Car repair tools', moment(1318074298806).toISOString(), []),
  ],
};

function configureStore(initialState = state) {
  return createStore(reducer, initialState, applyMiddleware(logger));
}

export default configureStore();
