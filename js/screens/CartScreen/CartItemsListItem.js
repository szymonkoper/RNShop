import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import propTypes from 'prop-types';
import { itemType } from '../../types';

const CartItemsListItem = ({ item, onItemTapped }) => (
  <TouchableHighlight onPress={onItemTapped}>
    <Text>{item.name}</Text>
  </TouchableHighlight>
);

CartItemsListItem.propTypes = {
  item: itemType.isRequired,
  onItemTapped: propTypes.func.isRequired,
};

export default CartItemsListItem;
