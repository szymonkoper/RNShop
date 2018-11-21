import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import CartsList from '../../components/CartsList';
import Button from '../../components/Button';

const doStrangeSound = () => {
  console.log('KLIK!');
};

const CurrentCarts = ({ currentCarts }) => (
  <View>
    <Button label="Add" onTap={doStrangeSound} />
    <CartsList carts={currentCarts} />
  </View>
);

const mapStateToProps = ({ carts }) => ({
  currentCarts: carts.filter(it => !it.archived),
});

const CurrentCartsContainer = connect(mapStateToProps)(CurrentCarts);
export default CurrentCartsContainer;
