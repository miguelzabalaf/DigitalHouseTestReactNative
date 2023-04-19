import { Colors, Typography } from 'react-native-ui-lib';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

export function presetStyles(): void {
  Colors.loadColors(colors);
  Typography.loadTypographies(typography);
}
