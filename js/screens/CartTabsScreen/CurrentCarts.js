import React from 'react';
import { connect } from 'react-redux';
import CartsList from '../../components/CartsList';

const CurrentCarts = ({ carts }) => <CartsList carts={carts.filter(it => !it.archived)} />;

const mapStateToProps = props => props;

const CurrentCartsContainer = connect(mapStateToProps)(CurrentCarts);
export default CurrentCartsContainer;
