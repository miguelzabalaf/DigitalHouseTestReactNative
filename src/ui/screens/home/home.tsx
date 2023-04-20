// Dependencies
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

// Components
import { View } from 'react-native-ui-lib';
import Layout from '../../containers/layout';
import GreetHeader from './components/greetHeader';
import YourPoints from './components/yourPoints';
import YourMovement from './components/yourMovements';
import { useHome } from './controllers/useHome';
import FilterBottom from './components/filterBottom';
import { SafeAreaView } from 'react-native';

// Strings
import { strings } from '../../../constants/strings';

// Styles
import { homeStyles } from './styles';

export function Home(): JSX.Element {
  const { totalPoints, filter, productsFiltered, handleFilter } = useHome();
  const {
    containerSafeAreaStyle,
    containerStyle,
    containerMovementStyle,
    containerBottomStyle,
  } = homeStyles();
  return (
    <SafeAreaView style={containerSafeAreaStyle}>
      <Layout.Page withoutScroll>
        <Layout.ContentWithPaddingHorizontal>
          <View style={containerStyle}>
            <GreetHeader />
            <View height={moderateScale(20)} />
            <YourPoints
              month={strings.labels.fictitiousMonth}
              points={totalPoints}
            />
            <View height={moderateScale(20)} />
            <View style={containerMovementStyle}>
              <YourMovement productsFiltered={productsFiltered} />
            </View>
          </View>
          <View style={containerBottomStyle}>
            <FilterBottom filter={filter} handleFilter={handleFilter} />
          </View>
        </Layout.ContentWithPaddingHorizontal>
      </Layout.Page>
    </SafeAreaView>
  );
}
