import React from 'react';
import { FlatList, Text } from 'react-native';
import { sortByChain } from 'sort-by-chain';

// TODO: Extract item view
const sortingChain = [
  { valueGetter: it => it.modificationDate, reverse: true },
  { valueGetter: it => it.name },
];

const CartItemsList = ({ items }) => (
  <FlatList
    data={sortByChain(items, sortingChain)}
    keyExtractor={item => item.uuid}
    renderItem={listItem => <Text>{listItem.item.name}</Text>}
  />
);

export default CartItemsList;
