// Dependencies
import React from 'react';

// Components
import { View } from 'react-native-ui-lib';
import Button from '../../../../components/button';

// Interfaces
import { FilterBottomProps } from './interfaces';
import { ProductFilter } from '../../interfaces';

// Styles
import { FilterBottomstyles } from './style';
import { strings } from '../../../../../constants/strings';

export function FilterBottom(props: FilterBottomProps): JSX.Element {
  const { filter, handleFilter } = props;
  const { containerButtonsStyle } = FilterBottomstyles();
  return (
    <>
      {filter === ProductFilter.ALL ? (
        <View style={containerButtonsStyle}>
          <View flex>
            <Button
              text={strings.labels.won}
              onPress={() => handleFilter(ProductFilter.WON)}
            />
          </View>
          <View flex>
            <Button
              text={strings.labels.remeemded}
              onPress={() => handleFilter(ProductFilter.REDEEMED)}
            />
          </View>
        </View>
      ) : (
        <Button
          text={strings.labels.all}
          onPress={() => handleFilter(ProductFilter.ALL)}
        />
      )}
    </>
  );
}
