// Dependencies
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

// Components
import { Text, View } from 'react-native-ui-lib';

// Interfaces
import { YourPointsProps } from './interfaces';

// Styles
import { yourPointsStyles } from './styles';
import { strings } from '../../../../../constants/strings';

export function YourPoints(props: YourPointsProps): JSX.Element {
  const { month, points } = props;
  const { containerStyles, containerCardStyles, cardPointsStyle } =
    yourPointsStyles();
  return (
    <View style={containerStyles}>
      <Text h2 bold muted uppercase>
        {strings.labels.yourPoints}
      </Text>
      <View height={moderateScale(20)} />
      <View style={containerCardStyles}>
        <Text h3 bold white>
          {month}
        </Text>
        <View height={moderateScale(20)} />
        <View style={cardPointsStyle}>
          <Text big bold white center>
            {points} pts
          </Text>
        </View>
      </View>
    </View>
  );
}
