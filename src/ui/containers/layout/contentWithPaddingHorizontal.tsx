// Dependencies
import React from 'react';

// Components
import { View } from 'react-native';

// Interfaces
import { ContentWithPaddingHorizontalProps } from '../interfaces';

// Styles
import { contentWithPaddingHorizontalStyles } from './styles';

export function ContentWithPaddingHorizontal(
  props: ContentWithPaddingHorizontalProps,
): JSX.Element {
  const { children } = props;
  const { contentStyle } = contentWithPaddingHorizontalStyles({
    flex: props.flex,
  });
  return <View style={contentStyle}>{children}</View>;
}
