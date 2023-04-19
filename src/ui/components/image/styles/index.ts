// Dependencies
import { ScaledSheet } from 'react-native-size-matters';

export function imageStyles() {
  return ScaledSheet.create({
    containerStyles: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      position: 'relative',
    },
    loadingStyles: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageComponentStyles: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
}
