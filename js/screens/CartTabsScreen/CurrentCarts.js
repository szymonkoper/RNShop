import React from 'react';
import { connect } from 'react-redux';
import CartsList from '../../components/CartsList';

class CurrentCarts extends React.Component {
  render() {
    const carts = this.props.carts;

    return <CartsList carts={carts} />;
  }
}

const mapStateToProps = props => props;

const CurrentCartsContainer = connect(mapStateToProps)(CurrentCarts);
export default CurrentCartsContainer;
