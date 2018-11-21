import React from 'react';
import { FlatList, Text } from 'react-native';

const renderItem = ({ item }) => (
  <Text>{item.name}</Text>
);

const getItemKey = item => item.uuid;

const CartsList = ({ carts }) => (
  <FlatList data={carts} keyExtractor={getItemKey} renderItem={renderItem} />
);

export default CartsList;
