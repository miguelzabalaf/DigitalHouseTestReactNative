import { ProductRepository } from '../../repositories/product.repository';
import { productsDummy } from '../dataDummy/products.dummy';
import { productUseCase } from '../product.useCase';

describe('[PRODUCT] - use cases', () => {
  const productRepositoryMock: jest.Mocked<ProductRepository> = {
    getProducts: jest.fn(),
  };
  const { getProducts } = productUseCase(productRepositoryMock);

  beforeAll(() => {
    getProducts();
  });

  test('should call getProducts', () => {
    expect(productRepositoryMock.getProducts).toHaveBeenCalled();
  });

  test('should call getProducts once', () => {
    expect(productRepositoryMock.getProducts).toHaveBeenCalledTimes(1);
  });

  test('should call getProducts without arguments', () => {
    expect(productRepositoryMock.getProducts).toHaveBeenCalledWith();
  });

  test('should call getProducts with the correct arguments', () => {
    expect(productRepositoryMock.getProducts).toHaveBeenCalledWith();
  });

  test('should call getProducts from repository and return array dummy data', async () => {
    productRepositoryMock.getProducts.mockResolvedValueOnce(productsDummy);
    const result = await getProducts();
    expect(result).toEqual(productsDummy);
  });
});
