// Dependencies
import React from 'react';
import { Colors } from 'react-native-ui-lib';

// Components
import { View, Image as ImageComponent, ActivityIndicator } from 'react-native';
import Icon from '../icon';

// Controllers
import { useImage } from './controllers/useImage';

// Interfaces
import { ImageProps } from './interfaces';

// Styles
import { imageStyles } from './styles';

export function Image(props: ImageProps): JSX.Element {
  const { uri } = props;
  const { loading, error, onLoadStart, onLoadEnd, onError } = useImage();
  const { containerStyles, imageComponentStyles, loadingStyles } =
    imageStyles();
  return (
    <View style={containerStyles}>
      {!error && (
        <ImageComponent
          source={{ uri }}
          style={imageComponentStyles}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
          fadeDuration={500}
        />
      )}
      {loading && (
        <ActivityIndicator
          style={loadingStyles}
          size={'small'}
          color={Colors.mutated}
        />
      )}
      {error && <Icon.ImageAlt color={Colors.muted} scale={2} />}
    </View>
  );
}
