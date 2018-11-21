import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import moment from 'moment';
import CartsList from '../../components/CartsList';
import Button from '../../components/Button';
import { createCart } from '../../redux/carts/actions';
import Cart from '../../models/Cart';

const onAddCartTapped = _createCart => () => {
  // TODO: This is incorrect
  const cart = new Cart('nowy', moment().toISOString(), []);
  _createCart(cart);
};

const CurrentCarts = ({ currentCarts, createCart }) => (
  <View>
    <Button label="Add new shopping list" onTap={onAddCartTapped(createCart)} />
    <CartsList carts={currentCarts} />
  </View>
);

const mapStateToProps = ({ carts }) => ({
  currentCarts: carts.filter(it => !it.archived),
});

const mapDispatchToProps = { createCart };

const CurrentCartsContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentCarts);
export default CurrentCartsContainer;
