import { Product } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';
import { getProducts } from '../services/product.service';

export function productImplementation(): ProductRepository {
  return {
    getProducts(): Promise<Array<Product>> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await getProducts();
          const products = resp.data;
          resolve(products);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}
