// Dependencies
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { usePromiseTracker } from 'react-promise-tracker';

// Components
import { Colors, Text, View } from 'react-native-ui-lib';
import { ActivityIndicator } from 'react-native';

// Interfaces
import { YourPointsProps } from './interfaces';

// Styles
import { yourPointsStyles } from './styles';
import { strings } from '../../../../../constants/strings';

export function YourPoints(props: YourPointsProps): JSX.Element {
  const { month, points } = props;
  const { containerStyles, containerCardStyles, cardPointsStyle } =
    yourPointsStyles();
  const { promiseInProgress } = usePromiseTracker();
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
            {!promiseInProgress ? (
              `${points} pts`
            ) : (
              <ActivityIndicator color={Colors.neutral} />
            )}
          </Text>
        </View>
      </View>
    </View>
  );
}
