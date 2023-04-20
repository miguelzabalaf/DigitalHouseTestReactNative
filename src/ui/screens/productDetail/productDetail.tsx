// Dependencies
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

// Components
import Layout from '../../containers/layout';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';

// Interfaces
import { ProductDetailProps } from './interfacs';
import HeaderProduct from './components/headerProduct';
import Image from '../../components/image';
import { formatDateISO8601 } from '../../helpers/quickFunctions';
import Button from '../../components/button';
import { pop } from '../../../navigation/helpers/navigation';
import { ProductDetailStyles } from './styles';
import { strings } from '../../../constants/strings';

export function ProductDetail(props: ProductDetailProps): JSX.Element {
  const { product, componentId } = props;
  const { containerStyle, imageContainerStyle, bottomActionStyle } =
    ProductDetailStyles();
  return (
    <Layout.Page withoutScroll contentWithoutPaddingTop>
      <View style={containerStyle}>
        <HeaderProduct title={product.product} />
        <View height={moderateScale(20)} />
        <Layout.ContentWithPaddingHorizontal>
          <View style={imageContainerStyle}>
            <Image uri={product.image} />
          </View>
          <View height={moderateScale(20)} />
          <Text p muted bold>
            Detalles del producto:
          </Text>
          <View height={moderateScale(20)} />
          <Text h3 black bold>
            Comprado el {formatDateISO8601(product.createdAt)}
          </Text>
          <View height={moderateScale(20)} />
          <Text p muted bold>
            {strings.labels.with}
            {product.is_redemption ? 'e' : 'a'}{' '}
            {product.is_redemption
              ? strings.labels.exchange
              : strings.labels.buy}{' '}
            {product.is_redemption
              ? strings.labels.youReduced
              : strings.labels.youAccumulated}
            :
          </Text>
          <View height={moderateScale(20)} />
          <Text h1 black bold>
            {product.points} puntos
          </Text>
        </Layout.ContentWithPaddingHorizontal>
      </View>
      <View style={bottomActionStyle}>
        <Layout.ContentWithPaddingHorizontal>
          <Button text="Aceptar" onPress={() => pop({ componentId })} />
        </Layout.ContentWithPaddingHorizontal>
      </View>
    </Layout.Page>
  );
}
