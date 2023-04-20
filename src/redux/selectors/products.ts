// Helpers
import { createSelector } from '../helpers/createSelector';
import { ReduxStore } from '../store';

export function productSelectors() {
  return {
    getProductsSelector() {
      return createSelector(
        (state: ReduxStore) => state.products,
        products => products.data,
      );
    },
    getTotalProductPointsSelector() {
      return createSelector(
        (state: ReduxStore) => state.products,
        products => {
          const totalPoints = products.data.reduce((acm, product) => {
            return acm + product.points;
          }, 0);
          return totalPoints;
        },
      );
    },
  };
}
