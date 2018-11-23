import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

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

const CartListItem = ({ item, onItemTap, onItemLongPress }) => (
  <TouchableOpacity
    style={styles.layout}
    onPress={() => onItemTap(item)}
    onLongPress={() => onItemLongPress(item)}
  >
    <Text style={styles.textName} numberOfLines={1}>{item.name}</Text>
    <Text style={styles.textCount}>{item.items.length}</Text>
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
