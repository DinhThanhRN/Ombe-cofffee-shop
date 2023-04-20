import React from 'react';
import {StyleSheet, ScrollView, ViewStyle} from 'react-native';
import ProductItem from '../ProductItem';
import {Colors} from '../../../config/colors';
import {ProductData} from '../../../interfaces/Product';

interface Props {
  style?: ViewStyle;
  data: ProductData[];
}

const ProductsList = ({data, style}: Props): JSX.Element => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, style]}>
      {data.map((item, index) => (
        <ProductItem key={index} product={item} />
      ))}
    </ScrollView>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 4,
  },
  titleContainer: {
    marginVertical: 12,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '500',
  },
  pressableText: {
    fontSize: 20,
  },
});
