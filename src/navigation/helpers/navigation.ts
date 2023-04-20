import { Layout, Navigation } from 'react-native-navigation';
import { NavigateToProps, PopProps } from '../interfaces';

export function navigateTo({
  screenName,
  componentId,
  props,
  options,
}: NavigateToProps) {
  const configScreen: Layout<{ [key: string]: any }> = {
    component: {
      id: screenName,
      name: screenName,
      passProps: {
        lastScreenName: componentId,
        ...props,
      },
      options,
    },
  };
  if (screenName !== componentId) {
    Navigation.push(componentId, configScreen);
  } else {
    console.info(
      "Info: Your stack can't contain two children with the same id:",
      componentId,
    );
  }
}

export function pop(props: PopProps) {
  const { componentId } = props;
  Navigation.pop(componentId);
}
