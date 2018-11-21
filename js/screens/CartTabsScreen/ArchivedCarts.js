import React from 'react';
import { connect } from 'react-redux';
import CartsList from '../../components/CartsList';

const ArchivedCarts = ({ carts }) => <CartsList carts={carts.filter(it => it.archived)} />;

const mapStateToProps = props => props;

const ArchivedCartsContainer = connect(mapStateToProps)(ArchivedCarts);
export default ArchivedCartsContainer;
