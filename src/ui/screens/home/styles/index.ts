import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors } from 'react-native-ui-lib';

export function homeStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flex: 1,
    },
    containerSafeAreaStyle: {
      flex: 1,
      backgroundColor: Colors.neutral,
    },
    containerBottomStyle: {
      paddingBottom: moderateScale(20),
    },
    containerMovementStyle: {
      flex: 1,
    },
  });
}
