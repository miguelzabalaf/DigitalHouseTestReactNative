import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors } from 'react-native-ui-lib';
import { isIOS } from '../../../../../helpers/quickFunctions';

export function headerProductStyles() {
  return ScaledSheet.create({
    container: {
      height: moderateScale(isIOS() ? 125 : 100),
      backgroundColor: Colors.secondary,
      justifyContent: 'flex-end',
      paddingBottom: moderateScale(20),
    },
  });
}
