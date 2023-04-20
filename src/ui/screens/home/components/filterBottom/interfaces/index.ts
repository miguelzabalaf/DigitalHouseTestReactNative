import { ProductFilter } from '../../../interfaces';

export interface FilterBottomProps {
  filter: ProductFilter;
  handleFilter: (filter: ProductFilter) => void;
}
