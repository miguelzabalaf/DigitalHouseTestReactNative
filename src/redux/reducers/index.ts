// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// reducers
import { productsReducer } from './products';

export const reducers = combineReducers({
  products: productsReducer,
});
