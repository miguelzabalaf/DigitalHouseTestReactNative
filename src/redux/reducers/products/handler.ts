import { Product } from '../../../domain/entities/product.entity';
import { ProductsInitialState } from './interfaces';
// Dependecies
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import { types } from './types';

export const handler = {
  [types.GET_PRODUCTS]: (
    state: ProductsInitialState,
    action: PayloadAction<Array<Product>>,
  ) => {
    const products = action.payload;
    return {
      ...state,
      products,
    };
  },
};
