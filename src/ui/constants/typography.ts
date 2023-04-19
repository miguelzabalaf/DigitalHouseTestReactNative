import { TextStyle } from 'react-native/types';
import { fonts } from './fonts';

interface Typography {
  [key: string]: TextStyle;
}

export const typography: Typography = {
  h1: {
    fontSize: 26,
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 16,
  },
  p: {
    fontSize: 14,
  },
  small: {
    fontSize: 12,
  },
  regular: {
    fontFamily: fonts.regular,
  },
  bold: {
    fontFamily: fonts.bold,
  },
  extraBold: {
    fontFamily: fonts.black,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  justify: {
    textAlign: 'justify',
  },
};
