import { Product } from '../../../../domain/entities/product.entity';
import { ScreenProps } from '../../../../navigation/interfaces';

export interface ProductDetailProps extends ScreenProps {
  product: Product;
}
