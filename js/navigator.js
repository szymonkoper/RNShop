import { createStackNavigator } from 'react-navigation';
import CartTabsScreen from './screens/CartTabsScreen';
import CartScreen from './screens/CartScreen';

export default createStackNavigator({
  CartTabs: {
    screen: CartTabsScreen,
    navigationOptions: () => ({
      title: 'Shopping lists',
    }),
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.cart.name,
    }),
  },
}, {
  initialRouteName: 'CartTabs',
});
