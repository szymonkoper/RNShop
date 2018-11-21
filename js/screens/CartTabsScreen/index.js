import { createBottomTabNavigator } from 'react-navigation';
import CurrentCarts from './CurrentCarts';
import ArchivedCarts from './ArchivedCarts';

const CartsTabNavigator = createBottomTabNavigator({
  Current: CurrentCarts,
  Archived: ArchivedCarts,
});

export default CartsTabNavigator;
