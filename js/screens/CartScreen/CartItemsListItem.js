import React from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import propTypes from 'prop-types';
import { itemType } from '../../types';

const styles = StyleSheet.create({
  layout: {
    borderRadius: 5,
    backgroundColor: '#7a8aaf',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    flex: 1,
  },
  rowContainer: {
    padding: 10,
    flex: 1,
  },
  textName: {
    color: '#ffffff',
    fontSize: 16,
  },
});

const swipeButtons = onItemDelete => [{
  text: 'Delete',
  backgroundColor: '#f00',
  onPress: onItemDelete,
}];

const CartItemsListItem = ({ item, onItemDelete }) => (
  <Swipeout right={swipeButtons(onItemDelete)} autoClose backgroundColor="transparent">
    <TouchableHighlight style={styles.layout}>
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  </Swipeout>
);

CartItemsListItem.propTypes = {
  item: itemType.isRequired,
  onItemDelete: propTypes.func.isRequired,
};

export default CartItemsListItem;
