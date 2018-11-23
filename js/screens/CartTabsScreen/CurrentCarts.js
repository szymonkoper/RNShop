import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import moment from 'moment';
import propTypes from 'prop-types';
import { cartsType } from '../../types';
import CartsList from '../../components/CartsList';
import Button from '../../components/Button';
import InputDialog from '../../components/InputDialog';
import { createCart, updateCart } from '../../redux/carts/actions';
import Cart from '../../models/Cart';

class CurrentCarts extends React.Component {
  state = {
    modalVisible: false,
  };

  showCartAddModal = visible => this.setState({ modalVisible: visible });

  onAddCartResultPositive = (name) => {
    this.createCartWithName(name);
    this.showCartAddModal(false);
  }

  createCartWithName = (name) => {
    const { createCart } = this.props;
    createCart(new Cart(name, moment().toISOString(), []));
  }

  onItemTap = (cart) => {
    const { navigation } = this.props;
    navigation.navigate('Cart', { cart });
  }

  onItemLongPress = (cart) => {
    const updates = {
      modificationDate: moment().toISOString(),
      archived: true,
    };

    const { updateCart } = this.props;
    updateCart(Object.assign({}, cart, updates));
  }

  render() {
    const { currentCarts } = this.props;
    const { modalVisible } = this.state;

    return (
      <View>
        <Button label="Add new shopping list" onTap={() => this.showCartAddModal(true)} />
        <CartsList
          carts={currentCarts}
          onItemTap={this.onItemTap}
          onItemLongPress={this.onItemLongPress}
        />
        <InputDialog
          label="Enter new shopping list name"
          positiveLabel="Add"
          visible={modalVisible}
          onPositive={this.onAddCartResultPositive}
          onDismiss={() => this.showCartAddModal(false)}
        />
      </View>
    );
  }
}

CurrentCarts.propTypes = {
  currentCarts: cartsType.isRequired,
  createCart: propTypes.func.isRequired,
  updateCart: propTypes.func.isRequired,
};

const mapStateToProps = ({ carts }) => ({
  currentCarts: carts.filter(it => !it.archived),
});

const mapDispatchToProps = { createCart, updateCart };

const CurrentCartsContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentCarts);
export default CurrentCartsContainer;
