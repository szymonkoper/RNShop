import * as types from './types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case types.CART_CREATE:
      return [...state, action.cart];
    case types.CART_UPDATE:
      return [...state.filter(it => it.uuid !== action.cart.uuid), action.cart];
    case types.CART_ADD_ENTRY: {
      const prevCart = state.find(it => it.uuid === action.cartUuid);
      const cart = Object.assign({}, prevCart, { items: prevCart.items.concat([action.entry]) });
      return [...state.filter(it => it.uuid !== action.cartUuid), cart];
    }
    default:
      return [...state];
  }
};

export default reducer;
