// Dependencies
import React from 'react';

// Components
import { View } from 'react-native';

// Interfaces
import { ContainerProps } from '../interfaces';

// Styles
import { contentWithPaddingHorizontalStyles } from './styles';

export function ContentWithPaddingHorizontal(
  props: ContainerProps,
): JSX.Element {
  const { children } = props;
  const { contentStyle } = contentWithPaddingHorizontalStyles();
  return <View style={contentStyle}>{children}</View>;
}
