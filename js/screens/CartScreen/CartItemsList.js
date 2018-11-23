import React from 'react';
import { FlatList } from 'react-native';
import { sortByChain } from 'sort-by-chain';
import propTypes from 'prop-types';
import CartItemsListItem from './CartItemsListItem';
import { itemType } from '../../types';

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

CartItemsList.propTypes = {
  items: propTypes.arrayOf(itemType).isRequired,
  onItemTapped: propTypes.func.isRequired,
};

export default CartItemsList;
