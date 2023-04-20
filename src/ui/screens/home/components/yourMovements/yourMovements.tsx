// Dependencies
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

// Components
import { View } from 'react-native-ui-lib';
import Text from 'react-native-ui-lib/text';
import YourMovementList from '../youtMovementList';
import { useYourMovement } from './controllers/useYourMovement';

// Styles
import { yourMovementStyles } from './styles';
import { YourMovementsProps } from './interfaces';
import { strings } from '../../../../../constants/strings';

export function YourMovement(props: YourMovementsProps): JSX.Element {
  const { productsFiltered, componentId } = props;
  const { containerStyles, containerListStyles } = yourMovementStyles();
  const {
    onPressProduct,
    loadingProducts,
    hasErrorToLoadProducts,
    onTryAgainGetProducts,
  } = useYourMovement({ componentId });
  return (
    <View style={containerStyles}>
      <Text h2 bold muted uppercase>
        {strings.labels.yourMovements}
      </Text>
      <View height={moderateScale(20)} />
      <View style={containerListStyles}>
        <YourMovementList
          products={productsFiltered}
          onPressProduct={onPressProduct}
          loading={loadingProducts}
          hasError={hasErrorToLoadProducts}
          onTryAgain={onTryAgainGetProducts}
        />
      </View>
    </View>
  );
}
