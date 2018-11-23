import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';

const CartListItem = ({ item, onItemTap, onItemLongPress }) => (
  <TouchableOpacity onPress={() => onItemTap(item)} onLongPress={() => onItemLongPress(item)}>
    <Text>{`${item.modificationDate}: ${item.name}`}</Text>
  </TouchableOpacity>
);

CartListItem.propTypes = {
  item: propTypes.shape({
    name: propTypes.string,
    items: propTypes.array,
  }).isRequired,
  onItemTap: propTypes.func.isRequired,
  onItemLongPress: propTypes.func.isRequired,
};

export default CartListItem;
