import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import moment from 'moment';
import CartsList from '../../components/CartsList';
import Button from '../../components/Button';
import { createCart, updateCart } from '../../redux/carts/actions';
import Cart from '../../models/Cart';

const onAddCartTapped = _createCart => () => {
  // TODO: This is incorrect
  const cart = new Cart('nowy', moment().toISOString(), []);
  _createCart(cart);
};

const onItemLongPress = _updateCart => (cart) => {
  const updates = {
    modificationDate: moment().toISOString(),
    archived: true,
  };

  _updateCart(Object.assign({}, cart, updates));
};

const CurrentCarts = ({ currentCarts, createCart, updateCart }) => (
  <View>
    <Button label="Add new shopping list" onTap={onAddCartTapped(createCart)} />
    <CartsList carts={currentCarts} onItemLongPress={onItemLongPress(updateCart)} />
  </View>
);

const mapStateToProps = ({ carts }) => ({
  currentCarts: carts.filter(it => !it.archived),
});

const mapDispatchToProps = { createCart, updateCart };

const CurrentCartsContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentCarts);
export default CurrentCartsContainer;
