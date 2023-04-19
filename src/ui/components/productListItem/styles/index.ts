// Dependencies
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors } from 'react-native-ui-lib';

export function productListItemStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flexDirection: 'row',
      paddingVertical: moderateScale(5),
      paddingHorizontal: moderateScale(5),
      backgroundColor: Colors.white,
    },
    containerImageStyle: {
      width: moderateScale(55),
      height: moderateScale(55),
      backgroundColor: Colors.neutral,
      borderRadius: moderateScale(10),
      overflow: 'hidden',
    },
    containerInfoStyle: {
      flex: 1,
      paddingHorizontal: moderateScale(10),
      paddingVertical: moderateScale(5),
      justifyContent: 'space-around',
    },
    containerInfoProductNameStyle: {},
    containerInfoDateStyle: {},
    containerPointsStyles: {
      width: moderateScale(75),
      justifyContent: 'center',
    },
    containerIconStyles: {
      paddingHorizontal: moderateScale(5),
      justifyContent: 'center',
    },
  });
}
