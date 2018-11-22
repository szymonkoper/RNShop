import React from 'react';
import { FlatList, Text } from 'react-native';

// TODO: Order items!
// TODO: Extract item view

const CartItemsList = ({ items }) => (
  <FlatList
    data={items}
    keyExtractor={item => item.uuid}
    renderItem={listItem => <Text>{listItem.item.name}</Text>}
  />
);

export default CartItemsList;
