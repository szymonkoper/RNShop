import * as types from './types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.CART_CREATE:
      return [...state, action.cart];
    case types.CART_UPDATE:
      return [...state.filter(it => it.uuid !== action.cart.uuid), action.cart];
    default:
      return [...state];
  }
};

export default reducer;
