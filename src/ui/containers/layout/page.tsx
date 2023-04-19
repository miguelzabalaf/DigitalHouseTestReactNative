// Dependencies
import React from 'react';
import { Spacings } from 'react-native-ui-lib';

// Components
import { ScrollView } from 'react-native';
import View from 'react-native-ui-lib/view';

// Interfaces
import { PageProps } from './interfaces';

// Styles
import { pageStyles } from './styles';

export function Page(props: PageProps): JSX.Element {
  const { children, withoutScroll, contentWithoutPaddingTop } = props;
  const { containerStyles, contentStyle } = pageStyles({
    contentWithoutPaddingTop,
  });
  return (
    <View style={containerStyles}>
      {withoutScroll ? (
        <View style={contentStyle}>{children}</View>
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={contentStyle}>
          {children}
          <View height={Spacings.s10 * 2} />
        </ScrollView>
      )}
    </View>
  );
}
