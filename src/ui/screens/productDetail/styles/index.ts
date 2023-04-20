// Dependencies
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

export function ProductDetailStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flex: 1,
    },
    imageContainerStyle: {
      height: moderateScale(350),
      borderRadius: moderateScale(10),
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    bottomActionStyle: {
      paddingBottom: moderateScale(50),
    },
  });
}
