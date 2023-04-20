import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { YourMovementListProps } from './interfaces';
import { Product } from '../../../../../domain/entities/product.entity';
import ProductListItem from '../../../../components/productListItem';
import { useFlatlist } from '../../../../controllers/useFlatlist';
import ListFooter from '../../../../components/listFooter';
import ListEmpty from '../../../../components/listEmpty';

export function YourMovementList(props: YourMovementListProps): JSX.Element {
  const { products, onPressProduct, loading, hasError, onTryAgain } = props;
  const {
    // Constants
    initialNumToRender,
    maxToRenderPerBatch,
    showGotoTopButton,
    // States
    data,
    allDataRendered,
    flatListRef,
    // Methods
    onEndReached,
    goToTop,
  } = useFlatlist<Product>({
    data: products,
    usualyHasMoreThan15Items: true,
  });

  return (
    <FlatList
      ref={flatListRef}
      data={loading ? [] : data}
      onRefresh={onTryAgain}
      refreshing={loading}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onTryAgain}
          colors={[Colors.muted]}
          tintColor={Colors.muted}
        />
      }
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      updateCellsBatchingPeriod={2000}
      onEndReachedThreshold={0.25}
      onEndReached={onEndReached}
      renderItem={({ item: product }) => (
        <ProductListItem onPress={() => onPressProduct(product)} {...product} />
      )}
      keyExtractor={item => item.id.toString()}
      ListFooterComponent={
        data?.length > (initialNumToRender ?? 0)
          ? ListFooter({
              allDataRendered,
              goToTop,
              showGotoTopButton,
            })
          : null
      }
      ListEmptyComponent={ListEmpty({ loading, hasError, onTryAgain })}
    />
  );
}
