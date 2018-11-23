import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import { itemType } from '../../types';

const styles = StyleSheet.create({
  layout: {
    borderRadius: 5,
    backgroundColor: '#7a8aaf',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 2,
    flexDirection: 'row',
  },
  textName: {
    color: '#ffffff',
    flex: 1,
    fontSize: 16,
  },
});

const CartItemsListItem = ({ item, onItemTapped }) => (
  <TouchableHighlight style={styles.layout} onPress={onItemTapped}>
    <Text style={styles.textName}>{item.name}</Text>
  </TouchableHighlight>
);

CartItemsListItem.propTypes = {
  item: itemType.isRequired,
  onItemTapped: propTypes.func.isRequired,
};

export default CartItemsListItem;
