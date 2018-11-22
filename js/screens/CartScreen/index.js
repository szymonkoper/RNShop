import React from 'react';
import { View, Text } from 'react-native';
import CartsItemsList from './CartItemsList';

class CartScreen extends React.PureComponent {
  render() {
    const { cart } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{cart.name}</Text>
        <CartsItemsList items={cart.items} />
      </View>
    );
  }
}

export default CartScreen;
