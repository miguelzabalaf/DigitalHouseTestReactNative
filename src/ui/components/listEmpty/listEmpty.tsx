// Dependencies
import React from 'react';

// Components
import { Text, View, Colors, Spacings } from 'react-native-ui-lib';
import Button from '../button';
import Icon from '../icon';

// Interfaces
import { ListEmptyProps } from './interfaces';

// Styles
import { listEmptyStyles } from './styles';

// Strings
import { strings } from '../../../constants/strings';

export function ListEmpty(props: ListEmptyProps): JSX.Element {
  const { loading, hasError, onTryAgain } = props;

  const { containerStyle, containerLoadingStyle } = listEmptyStyles();

  if (loading) {
    return (
      <View style={containerLoadingStyle}>
        <Text center small muted>
          {strings.labels.loading}
        </Text>
      </View>
    );
  }

  return (
    <View style={containerStyle} flex>
      {Icon[hasError ? 'WiffiOff' : 'Layout']({
        color: Colors.muted,
        scale: 2.5,
      })}
      <View height={Spacings.s6} />
      <Text text textMuted>
        {hasError
          ? strings.labels.weHavePromeblemsToLoadTheProducts
          : strings.labels.dontHaveProducts}
      </Text>
      <View height={Spacings.s3} />
      <Button
        loading={loading}
        onPress={onTryAgain}
        text={strings.labels.retry}
      />
    </View>
  );
}
