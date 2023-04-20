import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors } from 'react-native-ui-lib';
import { isIOS } from '../../../../../helpers/quickFunctions';

export function yourMovementStyles() {
  return ScaledSheet.create({
    containerStyles: {
      marginBottom: isIOS() ? 125 : 150,
    },
    containerListStyles: {
      bakcgroundColor: Colors.white,
      borderRadius: moderateScale(10),
      height: '100%',
    },
  });
}
