import { Product } from '../../../../../../domain/entities/product.entity';
import { ScreenProps } from '../../../../../../navigation/interfaces';

export interface YourMovementsProps extends ScreenProps {
  productsFiltered: Array<Product>;
}

export interface UseYourMovementProps extends ScreenProps {}
