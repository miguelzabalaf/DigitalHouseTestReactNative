import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/button';

export function Home(): JSX.Element {
  return (
    <View style={{ paddingTop: 100 }}>
      <Text>Home</Text>
      <Button text={'Todos'} />
    </View>
  );
}
