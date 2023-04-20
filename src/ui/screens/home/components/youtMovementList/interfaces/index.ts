import { Product } from '../../../../../../domain/entities/product.entity';

export interface YourMovementListProps {
  products: Array<Product>;
  onPressProduct: (product: Product) => void;
  loading: boolean;
  hasError?: boolean;
  onTryAgain: () => void;
}
