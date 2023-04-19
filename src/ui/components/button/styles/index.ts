// Dependencies
import { Colors } from 'react-native-ui-lib';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

// Interfaces
import { ButtonStylesProps } from '../interfaces';

export function buttonStyles(props: ButtonStylesProps) {
  const { loading } = props;
  return ScaledSheet.create({
    containerStyle: {
      width: '100%',
      height: moderateScale(50),
      backgroundColor: loading ? Colors.muted : Colors.primary,
      borderRadius: moderateScale(10),
      padding: moderateScale(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
