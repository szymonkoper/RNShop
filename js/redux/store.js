import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import moment from 'moment';
import Cart from '../models/Cart';
import Item from '../models/Item';
import reducer from './reducer';

const items = {
  groceries: [
    new Item('lettuce', moment(1318813398806).toISOString()),
    new Item('potatoes - sweet ones', moment(1318823398806).toISOString()),
    new Item('carrots (x2)', moment(1318874754806).toISOString()),
    new Item('Mint', moment(1318853498806).toISOString()),
  ],
  date: [
    new Item('flowers', moment(1318126698806).toISOString()),
    new Item('wine (but not too expensive)', moment(1317835228806).toISOString()),
  ],
  app: [
    new Item('publish the app', moment(1370536698806).toISOString()),
    new Item('make a lot of money', moment(1371256698806).toISOString()),
  ],
};

const state = {
  carts: [
    new Cart('Groceries for today', moment(1318874398806).toISOString(), items.groceries),
    new Cart('build this awesome app', moment(1318074398806).toISOString(), items.app, true),
    new Cart('date with girlfriend', moment(1319874398806).toISOString(), items.date),
  ],
};

function configureStore(initialState = state) {
  return createStore(reducer, initialState, applyMiddleware(logger));
}

export default configureStore();
