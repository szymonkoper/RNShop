import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import CartsItemsList from './CartItemsList';
import ItemNameInput from '../../components/ItemNameInput';
import Item from '../../models/Item';
import { addEntryToCart } from '../../redux/carts/actions';

class CartScreen extends React.PureComponent {
  onAddTapped = (text) => {
    if (!text) return;

    const entry = new Item(text, moment().toISOString());

    const { cart, addEntryToCart } = this.props;
    addEntryToCart(cart.uuid, entry);
  }

  render() {
    const { cart } = this.props;
    return (
      <View>
        <Text>{`Archived?: ${cart.archived}`}</Text>
        <Text>{`Entries count: ${cart.items.length}`}</Text>
        { cart.archived ? null : <ItemNameInput onAddTapped={this.onAddTapped} /> }
        <CartsItemsList items={cart.items} />
      </View>
    );
  }
}

const mapStateToProps = ({ carts }, props) => {
  console.log(props.navigation.state.params.cart.uuid);
  return ({
    cart: carts.find(cart => cart.uuid === props.navigation.state.params.cart.uuid),
  });
};

const mapDispatchToProps = {
  addEntryToCart,
};

const CartScreenContainer = connect(mapStateToProps, mapDispatchToProps)(CartScreen);
export default CartScreenContainer;
