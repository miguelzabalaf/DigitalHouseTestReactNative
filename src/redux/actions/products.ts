// Entities
import { Product } from '../../domain/entities/product.entity';

// Types
import { types } from '../reducers/products/types';

export function productActions() {
  return {
    setProductsAction(payload: Array<Product>) {
      return {
        type: types.GET_PRODUCTS,
        payload,
      };
    },
  };
}
