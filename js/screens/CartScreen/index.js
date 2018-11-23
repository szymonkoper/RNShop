import React from 'react';
import {
  Button, View, Text, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import propTypes from 'prop-types';
import { cartType } from '../../types';
import CartsItemsList from './CartItemsList';
import ItemNameInput from '../../components/ItemNameInput';
import { updateCart } from '../../redux/carts/actions';
import Item from '../../models/Item';

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'column',
    flex: 1,
  },
  input: {
    margin: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
  },
  list: {
    flex: 1,
  },
});

const cartFromNavigation = navigation => navigation.state.params.cart;

class CartScreen extends React.PureComponent {
  updateCartItems = (items) => {
    const { cart, updateCart } = this.props;
    const modificationDate = moment().toISOString();

    updateCart(Object.assign({}, cart, { modificationDate, items }));
  }

  onAddTapped = (text) => {
    if (!text) return;

    const { cart } = this.props;
    const modificationDate = moment().toISOString();
    this.updateCartItems([...cart.items, new Item(text, modificationDate)]);
  }

  onItemTapped = (item) => {
    const { cart } = this.props;
    if (cart.archived) return;

    this.updateCartItems([...cart.items.filter(it => it.uuid !== item.uuid)]);
  }

  render() {
    const { cart } = this.props;
    return (
      <View style={styles.layout}>
        {
          cart.archived
            ? null
            : <ItemNameInput style={styles.input} onAddTapped={this.onAddTapped} />
        }

        <CartsItemsList
          style={styles.list}
          items={cart.items}
          onItemTapped={this.onItemTapped}
        />
      </View>
    );
  }
}

CartScreen.propTypes = {
  cart: cartType.isRequired,
  updateCart: propTypes.func.isRequired,
};

const mapStateToProps = ({ carts }, props) => ({
  cart: carts.find(cart => cart.uuid === cartFromNavigation(props.navigation).uuid),
});

const mapDispatchToProps = {
  updateCart,
};

const CartScreenContainer = connect(mapStateToProps, mapDispatchToProps)(CartScreen);
export default CartScreenContainer;
