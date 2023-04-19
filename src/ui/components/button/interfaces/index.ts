import { TouchableOpacityProps } from 'react-native/types';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

export interface ButtonStylesProps extends Pick<ButtonProps, 'loading'> {}
