import React from 'react';
import { FlatList } from 'react-native';
import { sortByChain } from 'sort-by-chain';
import CartItemsListItem from './CartItemsListItem';

const sortingChain = [
  { valueGetter: it => it.modificationDate, reverse: true },
  { valueGetter: it => it.name },
];

const CartItemsList = ({ items, onItemTapped }) => (
  <FlatList
    data={sortByChain(items, sortingChain)}
    keyExtractor={item => item.uuid}
    renderItem={listItem => (
      <CartItemsListItem item={listItem.item} onItemTapped={() => onItemTapped(listItem.item)} />
    )}
  />
);

export default CartItemsList;
