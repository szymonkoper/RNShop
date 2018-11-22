import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CartListItem = ({ item, onItemTap, onItemLongPress }) => (
  <TouchableOpacity onPress={() => onItemTap(item)} onLongPress={() => onItemLongPress(item)}>
    <Text>{`${item.modificationDate}: ${item.name}`}</Text>
  </TouchableOpacity>
);

export default CartListItem;
