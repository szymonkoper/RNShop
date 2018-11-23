import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import moment from 'moment';
import propTypes from 'prop-types';
import { cartsType } from '../../types';
import CartsList from '../../components/CartsList';
import { updateCart } from '../../redux/carts/actions';

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'column',
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

const onItemTap = navigation => cart => navigation.navigate('Cart', { cart });

const onItemLongPress = _updateCart => (cart) => {
  const updates = {
    modificationDate: moment().toISOString(),
    archived: false,
  };

  _updateCart(Object.assign({}, cart, updates));
};

const ArchivedCarts = ({ archivedCarts, updateCart, navigation }) => (
  <CartsList
    style={styles.layout}
    carts={archivedCarts}
    onItemTap={onItemTap(navigation)}
    onItemLongPress={onItemLongPress(updateCart)}
  />
);

ArchivedCarts.propTypes = {
  archivedCarts: cartsType.isRequired,
  updateCart: propTypes.func.isRequired,
};

const mapStateToProps = ({ carts }) => ({
  archivedCarts: carts.filter(it => it.archived),
});

const mapDispatchToProps = { updateCart };

const ArchivedCartsContainer = connect(mapStateToProps, mapDispatchToProps)(ArchivedCarts);
export default ArchivedCartsContainer;
