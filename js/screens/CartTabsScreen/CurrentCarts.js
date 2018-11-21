import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import CartsList from '../../components/CartsList';
import Button from '../../components/Button';

const doStrangeSound = () => {
  console.log('KLIK!');
};

const CurrentCarts = ({ carts }) => (
  <View>
    <Button label="Add" onTap={doStrangeSound} />
    <CartsList carts={carts.filter(it => !it.archived)} />
  </View>
);

const mapStateToProps = props => props;

const CurrentCartsContainer = connect(mapStateToProps)(CurrentCarts);
export default CurrentCartsContainer;
