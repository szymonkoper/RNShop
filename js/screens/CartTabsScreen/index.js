import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Text } from 'react-native';

const CurrentCartsScreen = () => <Text>Current</Text>;
const ArchivedCartsScreen = () => <Text>Archived</Text>;

const CartsTabNavigator = createBottomTabNavigator({
  Current: CurrentCartsScreen,
  Archived: ArchivedCartsScreen,
});

export default CartsTabNavigator;
