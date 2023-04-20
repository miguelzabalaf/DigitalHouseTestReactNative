import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors } from 'react-native-ui-lib';

export function yourPointsStyles() {
  return ScaledSheet.create({
    containerStyles: {},
    containerCardStyles: {
      marginHorizontal: moderateScale(34),
      height: moderateScale(143),
      backgroundColor: Colors.primary,
      borderRadius: moderateScale(26),
      paddingHorizontal: moderateScale(18),
      paddingVertical: moderateScale(21),
      position: 'relative',
    },
    cardPointsStyle: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
