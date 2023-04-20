// Interfaces
import { Colors, Spacings } from 'react-native-ui-lib';
import { PageStylesProps } from '../interfaces';
import { ScaledSheet } from 'react-native-size-matters';
import { ContentWithPaddingHorizontalStylesProps } from '../../interfaces';

export function pageStyles(props: PageStylesProps) {
  const { contentWithoutPaddingTop } = props;
  return ScaledSheet.create({
    containerStyles: {
      flex: 1,
      backgroundColor: Colors.neutral,
    },
    contentStyle: {
      paddingTop: contentWithoutPaddingTop ? 0 : Spacings.s6,
      flex: 1,
      position: 'relative',
    },
  });
}

export function contentWithPaddingHorizontalStyles(
  props: ContentWithPaddingHorizontalStylesProps,
) {
  return ScaledSheet.create({
    contentStyle: {
      paddingHorizontal: Spacings.s3,
      flex: props.flex ? 1 : 0,
    },
  });
}
