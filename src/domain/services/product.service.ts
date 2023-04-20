import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants/endpoints';
import { Product } from '../entities/product.entity';

export function getProducts(): Promise<AxiosResponse<Array<Product>>> {
  return axios.get(endpoints.product.getProducts);
}
