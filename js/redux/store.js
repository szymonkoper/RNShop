import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducer from './reducer';

const config = {
  debug: true,
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
