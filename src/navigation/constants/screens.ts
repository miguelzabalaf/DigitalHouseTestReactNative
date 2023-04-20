// Contsants
import { screenNames } from './screenNames';

// Screens
import ProductDetail from '../../ui/screens/productDetail';
import Home from '../../ui/screens/home';
import { Screens } from '../interfaces';

export const screens: Screens = {
  home: {
    component: Home,
    name: screenNames.home,
  },
  productDetail: {
    component: ProductDetail,
    name: screenNames.productDetail,
  },
};
