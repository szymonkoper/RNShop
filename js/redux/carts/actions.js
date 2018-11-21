import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const createCart = cart => ({
  type: types.CART_CREATE,
  cart,
});
