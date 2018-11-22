import React from 'react';
import { Text } from 'react-native';

const CartItemsListItem = ({ item }) => (
  <Text>{item.name}</Text>
);

export default CartItemsListItem;
