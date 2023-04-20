import { ScaledSheet, moderateScale } from 'react-native-size-matters';

export function listEmptyStyles() {
  return ScaledSheet.create({
    containerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerLoadingStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: moderateScale(300),
    },
  });
}
