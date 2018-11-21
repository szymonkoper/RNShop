import React from 'react';
import { connect } from 'react-redux';
import CartsList from '../../components/CartsList';

const ArchivedCarts = ({ archivedCarts }) => <CartsList carts={archivedCarts} />;

const mapStateToProps = ({ carts }) => ({
  archivedCarts: carts.filter(it => it.archived),
});

const ArchivedCartsContainer = connect(mapStateToProps)(ArchivedCarts);
export default ArchivedCartsContainer;
