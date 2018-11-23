import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { itemType } from '../../types';

const styles = StyleSheet.create({
  layout: {
    borderRadius: 5,
    backgroundColor: '#016FB9',
    padding: 15,
    margin: 10,
    flexDirection: 'row',
  },
  textName: {
    color: '#ffffff',
    flex: 1,
    fontSize: 16,
  },
  textCount: {
    color: '#ffffff',
    fontSize: 18,
  },
});

const CartListItem = ({ cart, onItemTap, onItemLongPress }) => (
  <TouchableOpacity
    style={styles.layout}
    onPress={() => onItemTap(cart)}
    onLongPress={() => onItemLongPress(cart)}
  >
    <Text style={styles.textName} numberOfLines={1}>{cart.name}</Text>
    <Text style={styles.textCount}>{cart.items.length}</Text>
  </TouchableOpacity>
);

CartListItem.propTypes = {
  cart: itemType.isRequired,
  onItemTap: propTypes.func.isRequired,
  onItemLongPress: propTypes.func.isRequired,
};

export default CartListItem;
