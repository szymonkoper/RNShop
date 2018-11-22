import * as types from './types';

export const createCart = cart => ({
  type: types.CART_CREATE,
  cart,
});

export const updateCart = cart => ({
  type: types.CART_UPDATE,
  cart,
});

export const addEntryToCart = (cartUuid, entry) => ({
  type: types.CART_ADD_ENTRY,
  cartUuid,
  entry,
});
