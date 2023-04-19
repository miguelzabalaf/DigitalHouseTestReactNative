// Entities
import { Product } from '../entities/product.entity';

export interface ProductRepository {
  getProducts(): Promise<Array<Product>>;
}
