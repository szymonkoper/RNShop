import React from 'react';
import { FlatList, Text } from 'react-native';
import { sortByChain } from 'sort-by-chain'; // <--- This is my library :)

// Simple sorting of shopping lists by modification date should be enough,
// but I couldn't resist urge to show you my awesome 'sort-by-chain' library. :)
// It builds a custom comparator from this chain to sort it in a correct order.
const sortingChain = [
  { valueGetter: it => it.modificationDate, reverse: true },
  { valueGetter: it => it.name },
];

const orderCarts = carts => sortByChain(carts, sortingChain);

const getItemKey = item => item.uuid;

const renderItem = ({ item }) => (
  <Text>{`${item.modificationDate}: ${item.name}`}</Text>
);

const CartsList = ({ carts }) => (
  <FlatList data={orderCarts(carts)} keyExtractor={getItemKey} renderItem={renderItem} />
);

export default CartsList;
