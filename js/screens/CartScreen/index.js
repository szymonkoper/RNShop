import React from 'react';
import { View, Text } from 'react-native';
import CartsItemsList from './CartItemsList';
import ItemNameInput from '../../components/ItemNameInput';

class CartScreen extends React.PureComponent {
  onAddTapped = (text) => {
    if (!text) return;

    console.log('Should add new item to cart');
  }

  render() {
    const { cart } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{`Name: ${cart.name}`}</Text>
        <Text>{`Entries count: ${cart.items.length}`}</Text>
        <ItemNameInput onAddTapped={this.onAddTapped} />
        <CartsItemsList items={cart.items} />
      </View>
    );
  }
}

export default CartScreen;
