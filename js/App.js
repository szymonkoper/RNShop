import React from 'react';
import { createAppContainer } from 'react-navigation';
import Navigator from './navigator';

const AppContainer = createAppContainer(Navigator);

export default () => (
  <AppContainer />
);
