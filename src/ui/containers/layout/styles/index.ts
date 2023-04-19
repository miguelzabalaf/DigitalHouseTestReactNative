// Interfaces
import { Colors, Spacings } from 'react-native-ui-lib';
import { PageStylesProps } from '../interfaces';
import { ScaledSheet } from 'react-native-size-matters';

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

export function contentWithPaddingHorizontalStyles() {
  return ScaledSheet.create({
    contentStyle: {
      paddingHorizontal: Spacings.s3,
    },
  });
}
