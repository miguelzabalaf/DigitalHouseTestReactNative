import { ProductRepository } from '../repositories/product.repository';

export function productUseCase(repository: ProductRepository) {
  return {
    async getProducts() {
      return await repository.getProducts();
    },
  };
}
