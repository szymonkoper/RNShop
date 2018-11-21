import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import Navigator from './navigator';
import store from './redux/store';

const AppContainer = createAppContainer(Navigator);

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
