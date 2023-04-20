// Dependencies
import React, { PureComponent } from 'react';
import { Colors } from 'react-native-ui-lib';

// Components
import Text from 'react-native-ui-lib/text';
import { View, TouchableOpacity } from 'react-native';
import Icon from '../icon';

// Styles
import { productListItemStyles } from './styles';
import Image from '../image';

// Entities
import { Product } from '../../../domain/entities/product.entity';
import { formatDateISO8601 } from '../../helpers/quickFunctions';

interface ProductListItemProps extends Product {
  onPress: () => void;
  loading?: boolean;
}
export class ProductListItem extends PureComponent<ProductListItemProps> {
  render() {
    const {
      createdAt,
      image,
      is_redemption: isRedemption,
      points,
      product: productName,
      onPress,
    } = this.props;
    const {
      containerStyle,
      containerImageStyle,
      containerInfoStyle,
      containerInfoProductNameStyle,
      containerInfoDateStyle,
      containerPointsStyle,
      containerIconStyle,
    } = productListItemStyles();
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={containerStyle}>
        <View style={containerImageStyle}>
          <Image uri={image} />
        </View>
        <View style={containerInfoStyle}>
          <View style={containerInfoProductNameStyle}>
            <Text bold h3 black numberOfLines={1}>
              {productName}
            </Text>
          </View>
          <View style={containerInfoDateStyle}>
            <Text regular p black numberOfLines={1}>
              {formatDateISO8601(createdAt)}
            </Text>
          </View>
        </View>
        <View style={containerPointsStyle}>
          <Text center h2 black bold numberOfLines={1}>
            {!isRedemption ? (
              <Text success center>
                +
              </Text>
            ) : (
              <Text error center>
                -
              </Text>
            )}
            {points}
          </Text>
        </View>
        <View style={containerIconStyle}>
          <Icon.ChevronRight color={Colors.muted} />
        </View>
      </TouchableOpacity>
    );
  }
}
