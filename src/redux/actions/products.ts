// Entities
import { Product } from '../../domain/entities/product';

// Types
import { types } from '../reducers/products/types';

export function productActions() {
  return {
    getProducts: (payload: Array<Product>) => {
      return {
        type: types.GET_PRODUCTS,
        payload,
      };
    },
  };
}