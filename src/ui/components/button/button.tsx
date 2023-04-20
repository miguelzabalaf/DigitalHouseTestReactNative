// Dependencies
import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import Text from 'react-native-ui-lib/text';

// Interfaces
import { ButtonProps } from './interfaces';

// Styles
import { buttonStyles } from './styles';

export function Button(props: ButtonProps): JSX.Element {
  const { text, loading } = props;
  const { containerStyle } = buttonStyles({ loading });
  return (
    <TouchableOpacity
      testID="DHButton"
      style={containerStyle}
      activeOpacity={0.9}
      disabled={loading}
      {...props}>
      {loading ? (
        <ActivityIndicator
          testID="DHButtonLoadingIndicator"
          color={Colors.white}
        />
      ) : (
        <Text white h3 bold testID="DHButtonText">
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
