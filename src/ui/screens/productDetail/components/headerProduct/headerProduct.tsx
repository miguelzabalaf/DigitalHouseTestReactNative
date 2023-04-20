// Dependencies
import React from 'react';

// Components
import { Text, View } from 'react-native-ui-lib';
import Layout from '../../../../containers/layout';

// Interfaces
import { HeaderProductProps } from './interfaces';

// Styles
import { headerProductStyles } from './styles';

export function HeaderProduct(props: HeaderProductProps): JSX.Element {
  const { title } = props;
  const { container } = headerProductStyles();
  return (
    <View style={container}>
      <Layout.ContentWithPaddingHorizontal>
        <Text bold h1 numberOfLines={2}>
          {title}
        </Text>
      </Layout.ContentWithPaddingHorizontal>
    </View>
  );
}
