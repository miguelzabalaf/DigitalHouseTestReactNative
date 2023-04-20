import { useCallback, useEffect, useMemo, useState } from 'react';
import { productUseCase } from '../../../../../../domain/useCases/product.useCase';
import { productImplementation } from '../../../../../../domain/implementation/product.implementation';
import { productSelectors } from '../../../../../../redux/selectors/products';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../../../../domain/entities/product.entity';
import { productActions } from '../../../../../../redux/actions/products';

export function useYourMovement() {
  // Use cases
  const { getProducts } = productUseCase(productImplementation());

  // Actions
  const { setProductsAction } = productActions();
  const dispatch = useDispatch();

  // States
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [hasErrorToLoadProducts, setHasErrorToLoadProducts] = useState(false);

  // Selectors
  const { getProductsSelector } = productSelectors();
  const products = useSelector(getProductsSelector());

  // Constants
  const isNecesaryGetProducts = useMemo(() => {
    return !products.length;
  }, [products]);

  // Methods
  const getProductsMethod = useCallback(async () => {
    try {
      setLoadingProducts(true);
      const data = await getProducts();
      dispatch(setProductsAction(data));
      setLoadingProducts(false);
    } catch (error) {
      setHasErrorToLoadProducts(true);
      setLoadingProducts(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProducts]);

  function onTryAgainGetProducts() {
    getProductsMethod();
  }

  function onPressProduct(product: Product) {
    console.log('product', product);
  }

  // Effects
  useEffect(() => {
    isNecesaryGetProducts && getProductsMethod();
    return () => {
      setLoadingProducts(false);
      setHasErrorToLoadProducts(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loadingProducts,
    onTryAgainGetProducts,
    hasErrorToLoadProducts,
    onPressProduct,
  };
}
