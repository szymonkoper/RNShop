import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { View, Text } from 'react-native';

const CartTabsScreen = () => (
  <View>
    <Text>CartTabsScreen</Text>
  </View>
);

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
