import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import moment from 'moment';
import Cart from '../models/Cart';
import Item from '../models/Item';
import reducer from './reducer';

const grocieries = [
  new Item('lettuce', moment(1318813398806).toISOString()),
  new Item('potato', moment(1318823398806).toISOString()),
  new Item('carrot', moment(1318874754806).toISOString()),
  new Item('mint', moment(1318853498806).toISOString()),
];

const state = {
  carts: [
    new Cart('Groceries for today', moment(1318874398806).toISOString(), grocieries),
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
