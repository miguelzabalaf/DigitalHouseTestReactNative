// Dependencies
import { LayoutRoot } from 'react-native-navigation';

// Strings
import { stacks } from '../constants/stacks';
import { screenNames } from '../constants/screenNames';

// Configurations
import { stackOptions } from '../options/stack';

export const initRoot: LayoutRoot = {
  root: {
    stack: {
      id: stacks.init,
      children: [
        {
          component: {
            name: screenNames.home,
            id: screenNames.home,
          },
        },
      ],
      options: stackOptions,
    },
  },
};
