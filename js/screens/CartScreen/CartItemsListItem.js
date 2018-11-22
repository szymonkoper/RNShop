import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const CartItemsListItem = ({ item, onItemTapped }) => (
  <TouchableHighlight onPress={onItemTapped}>
    <Text>{item.name}</Text>
  </TouchableHighlight>
);

export default CartItemsListItem;
