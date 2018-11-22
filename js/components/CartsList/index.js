import React from 'react';
import { FlatList } from 'react-native';
import { sortByChain } from 'sort-by-chain'; // <--- This is my library :)
import CartListItem from './CartListItem';

// Simple sorting of shopping lists by modification date should be enough,
// but I couldn't resist urge to show you my awesome 'sort-by-chain' library. :)
// It builds a custom comparator from this chain to sort it in a correct order.
const sortingChain = [
  { valueGetter: it => it.modificationDate, reverse: true },
  { valueGetter: it => it.name },
];

class CartsList extends React.Component {
  orderCarts = carts => sortByChain(carts, sortingChain);

  getItemKey = item => item.uuid;

  renderItem = ({ item }) => {
    const { onItemTap, onItemLongPress } = this.props;
    return <CartListItem item={item} onItemTap={onItemTap} onItemLongPress={onItemLongPress} />;
  }

  render() {
    const { carts } = this.props;
    return (
      <FlatList
        data={this.orderCarts(carts)}
        keyExtractor={this.getItemKey}
        renderItem={this.renderItem}
      />
    );
  }
}

export default CartsList;
