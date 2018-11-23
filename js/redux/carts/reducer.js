import { REHYDRATE } from 'redux-persist';
import * as types from './types';
import initialState from './initialState';

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.CART_CREATE:
      return [...state, action.cart];
    case types.CART_UPDATE:
      return [...state.filter(it => it.uuid !== action.cart.uuid), action.cart];
    case REHYDRATE:
      return action.payload ? action.payload.carts : initialState;
    default:
      return [...state];
  }
};

export default reducer;
