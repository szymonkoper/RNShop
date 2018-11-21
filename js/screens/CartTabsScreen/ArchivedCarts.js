import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import CartsList from '../../components/CartsList';
import { updateCart } from '../../redux/carts/actions';

const onItemLongPress = _updateCart => (cart) => {
  const updates = {
    modificationDate: moment().toISOString(),
    archived: false,
  };

  _updateCart(Object.assign({}, cart, updates));
};

const ArchivedCarts = ({ archivedCarts, updateCart }) => (
  <CartsList carts={archivedCarts} onItemLongPress={onItemLongPress(updateCart)} />
);

const mapStateToProps = ({ carts }) => ({
  archivedCarts: carts.filter(it => it.archived),
});

const mapDispatchToProps = { updateCart };

const ArchivedCartsContainer = connect(mapStateToProps, mapDispatchToProps)(ArchivedCarts);
export default ArchivedCartsContainer;
