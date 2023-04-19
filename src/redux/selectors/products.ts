// Helpers
import { createSelector } from '../helpers/createSelector';
import { ReduxStore } from '../store';

export function productSelectors() {
  return {
    getProductsSelector: () => {
      return createSelector(
        (state: ReduxStore) => state.products,
        products => products.data,
      );
    },
  };
}
