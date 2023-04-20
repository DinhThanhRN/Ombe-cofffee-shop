import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {NavigationProps} from '../../utils/types/NavigationProps';
import {Colors} from '../../config/colors';
import DetailOverlap from '../../components/MainScreens/ProductDetail/DetailOverlap';
import TopPart from '../../components/MainScreens/ProductDetail/TopPart';
import RateCircle from '../../components/MainScreens/ProductDetail/ui/RateCircle';
import axios from 'axios';
import {databaseURL} from '../../utils/ServerURLs';
import {queryStructure} from '../../utils/functions/QueryStructures';
import {tranferProductDataToUsableProductData} from '../../utils/functions/DataFormater/formatProductData';
import {ProductData} from '../../interfaces/Product';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/store';
import {queryProductByName} from '../../utils/functions/database/product/queryProductByName';

const ProductDetail = ({route}: any): JSX.Element => {
  const name = route.params?.product;
  const {token} = useSelector((state: RootState) => state.authentication);

  const [product, setProduct] = useState<ProductData>({
    id: '',
    data: {
      category: '',
      ingredients: [''],
      description: '',
      discountPercentage: 0,
      imageUrl: '',
      name: '',
      numberOfVote: 0,
      point: 0,
      price: 0,
      rating: 0,
      reviews: [''],
      variant: '',
    },
  });
  useEffect(() => {
    queryProductByName(name, token).then(response => {
      setProduct(response);
    });
  }, []);

  return (
    <View style={styles.container}>
      <TopPart
        name={product.data.name}
        imageURL={product.data.imageUrl}
        containerStyle={styles.background}
      />
      <View style={styles.overlay}>
        <RateCircle value={product.data.rating} />
        <DetailOverlap name={name} />
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 8,
  },
  background: {
    zIndex: -1,
  },
  overlay: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '70%',
    zIndex: 1,
  },
});
