import React from 'react';
import { Text } from 'react-native-ui-lib';
import ProductListItem from '../../components/productListItem';
import Layout from '../../containers/layout';

export function Home(): JSX.Element {
  return (
    <Layout.Page>
      <Layout.ContentWithPaddingHorizontal>
        <Text black>
          <Text h1 bold black>
            Bienvenido de vuelta!
          </Text>
          {'\n'}
          <Text h2 black regular>
            Ruben Rodriguez
          </Text>
        </Text>
      </Layout.ContentWithPaddingHorizontal>
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
    </Layout.Page>
  );
}
