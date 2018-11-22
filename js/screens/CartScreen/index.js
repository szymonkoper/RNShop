import React from 'react';
import { Text } from 'react-native';

class CartScreen extends React.Component {
  render() {
    const { cart } = this.props.navigation.state.params;
    return <>
      <Text>{cart.name}</Text>
      {cart.items.map(item => <Text>{item.name}</Text>)}
    </>;
  }
}

export default CartScreen;
