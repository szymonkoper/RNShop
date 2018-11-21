import { createStackNavigator } from 'react-navigation';
import CartTabsScreen from './screens/CartTabsScreen';

export default createStackNavigator({
  CartTabs: {
    screen: CartTabsScreen,
    navigationOptions: () => ({
      title: 'Shopping lists',
    }),
  },
}, {
  initialRouteName: 'CartTabs',
});
