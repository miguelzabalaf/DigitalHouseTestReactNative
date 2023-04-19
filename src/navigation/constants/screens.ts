// Contsants
import { screenNames } from './screenNames';

// Screens
import ProductDetail from '../../ui/screens/productDetail';
import Home from '../../ui/screens/home';

interface Screens {
  [key: string]: {
    component: (props: any) => JSX.Element;
    name: string;
  };
}

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
