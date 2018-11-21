import * as types from './types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.CART_CREATE:
      return [...state, action.cart];
    default:
      return [...state];
  }
};

export default reducer;
