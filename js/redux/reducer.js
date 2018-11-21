import { combineReducers } from 'redux';
import carts from './carts/reducer';

const reducer = combineReducers({
  carts,
});

export default reducer;
