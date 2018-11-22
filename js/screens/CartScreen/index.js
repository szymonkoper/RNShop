import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import CartsItemsList from './CartItemsList';
import ItemNameInput from '../../components/ItemNameInput';
import { updateCart } from '../../redux/carts/actions';
import Item from '../../models/Item';

class CartScreen extends React.PureComponent {
  updateCartItems = (items) => {
    const { cart, updateCart } = this.props;
    const modificationDate = moment().toISOString();

    updateCart(Object.assign({}, cart, { modificationDate, items }));
  }

  onAddTapped = (text) => {
    if (!text) return;

    const { cart } = this.props;
    const modificationDate = moment().toISOString();
    this.updateCartItems([...cart.items, new Item(text, modificationDate)]);
  }

  onItemTapped = (item) => {
    const { cart } = this.props;
    if (cart.archived) return;

    this.updateCartItems([...cart.items.filter(it => it.uuid !== item.uuid)]);
  }

  render() {
    const { cart } = this.props;
    return (
      <View>
        <Text>{`Archived?: ${cart.archived}`}</Text>
        <Text>{`Entries count: ${cart.items.length}`}</Text>
        { cart.archived ? null : <ItemNameInput onAddTapped={this.onAddTapped} /> }
        <CartsItemsList items={cart.items} onItemTapped={this.onItemTapped} />
      </View>
    );
  }
}

const mapStateToProps = ({ carts }, props) => ({
  cart: carts.find(cart => cart.uuid === props.navigation.state.params.cart.uuid),
});

const mapDispatchToProps = {
  updateCart,
};

const CartScreenContainer = connect(mapStateToProps, mapDispatchToProps)(CartScreen);
export default CartScreenContainer;
