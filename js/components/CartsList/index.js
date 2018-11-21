import React from 'react';
import { FlatList, Text } from 'react-native';

const renderItem = ({ item }) => (
  <Text>{item.name}</Text>
);

const CartsList = ({ carts }) => (
  <FlatList data={carts} keyExtractor={item => item.name} renderItem={renderItem} />
);

export default CartsList;
