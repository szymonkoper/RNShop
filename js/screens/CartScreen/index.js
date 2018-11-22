import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CartsItemsList from './CartItemsList';
import ItemNameInput from '../../components/ItemNameInput';

class CartScreen extends React.PureComponent {
  onAddTapped = (text) => {
    if (!text) return;

    console.log('Should add new item to cart');
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

const mapStateToProps = ({ carts }, props) => ({
  cart: carts.find(cart => cart.uuid === props.navigation.state.params.cart.uuid),
});

const mapDispatchToProps = {
};

const CartScreenContainer = connect(mapStateToProps, mapDispatchToProps)(CartScreen);
export default CartScreenContainer;
