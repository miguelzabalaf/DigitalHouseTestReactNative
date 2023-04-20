import axios, { AxiosResponse } from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { endpoints } from '../../constants/endpoints';
import { Product } from '../entities/product.entity';

export function getProducts(): Promise<AxiosResponse<Array<Product>>> {
  const request = axios.get(endpoints.product.getProducts);
  return trackPromise(request);
}
