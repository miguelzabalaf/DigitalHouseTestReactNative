import { useSelector } from 'react-redux';
import { productSelectors } from '../../../../redux/selectors/products';
import { useMemo, useState } from 'react';
import { ProductFilter } from '../interfaces';

export function useHome() {
  // States
  const [filter, setFilter] = useState<ProductFilter>(ProductFilter.ALL);

  // Selectors
  const { getTotalProductPointsSelector, getProductsSelector } =
    productSelectors();
  const totalPoints = useSelector(getTotalProductPointsSelector());
  const products = useSelector(getProductsSelector());

  // Hooks
  const productsFiltered = useMemo(() => {
    switch (filter) {
      case ProductFilter.WON:
        return products.filter(product => product.is_redemption === false);
      case ProductFilter.REDEEMED:
        return products.filter(product => product.is_redemption === true);
      default:
        return products;
    }
  }, [filter, products]);

  // Methods
  function handleFilter(filterSelected: ProductFilter) {
    setFilter(filterSelected);
  }

  return {
    totalPoints,
    productsFiltered,
    handleFilter,
    filter,
  };
}
