import { Colors } from 'react-native-ui-lib';
import { ButtonStylesProps } from '../interfaces';
import { buttonStyles } from '../styles';
import { moderateScale } from 'react-native-size-matters';

describe('[BUTTON] - Styles', () => {
  const expectedProps: ButtonStylesProps = {
    loading: false,
  };
  const { containerStyle } = buttonStyles(expectedProps);

  test('should return the button with width of 100%', () => {
    expect(containerStyle).toHaveProperty('width', '100%');
  });

  test('should return the button with height of 50', () => {
    expect(containerStyle).toHaveProperty('height', moderateScale(50));
  });

  test('should return the button with backgroundColor of primary', () => {
    expect(containerStyle).toHaveProperty('backgroundColor', Colors.primary);
  });
});
