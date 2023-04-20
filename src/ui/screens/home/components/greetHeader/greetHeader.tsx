// Dependencies
import React from 'react';
// Components
import { Text } from 'react-native-ui-lib';
import { strings } from '../../../../../constants/strings';

export function GreetHeader(): JSX.Element {
  return (
    <Text black>
      <Text h1 bold black>
        {strings.labels.greet}
      </Text>
      {'\n'}
      <Text h2 black regular>
        {strings.labels.fictitiousName}
      </Text>
    </Text>
  );
}
