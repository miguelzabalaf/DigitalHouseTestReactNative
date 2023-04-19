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

export class ProductListItem extends PureComponent<any> {
  render() {
    const {} = this.props;
    const {
      containerStyle,
      containerImageStyle,
      containerInfoStyle,
      containerInfoProductNameStyle,
      containerInfoDateStyle,
      containerPointsStyles,
      containerIconStyles,
    } = productListItemStyles();
    return (
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.7}
        style={containerStyle}>
        <View style={containerImageStyle}>
          <Image uri="https://picsum.photos/500" />
        </View>
        <View style={containerInfoStyle}>
          <View style={containerInfoProductNameStyle}>
            <Text bold h3 black numberOfLines={1}>
              Nombre del producto Nombre del producto Nombre del producto
            </Text>
          </View>
          <View style={containerInfoDateStyle}>
            <Text regular p black numberOfLines={1}>
              26 de enero, 2019
            </Text>
          </View>
        </View>
        <View style={containerPointsStyles}>
          <Text center h2 black bold numberOfLines={1}>
            <Text success center>
              +
            </Text>
            1000
          </Text>
        </View>
        <View style={containerIconStyles}>
          <Icon.ChevronRight color={Colors.muted} />
        </View>
      </TouchableOpacity>
    );
  }
}
