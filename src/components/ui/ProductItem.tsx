import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../config/colors';
import {getImageFromStorage} from '../../utils/functions/getImageFromStorage';
import PressableText from './atoms/PressableText';
import PressableImage from './atoms/PressableImage';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../utils/types/NavigationProps';
import {ProductData} from '../../interfaces/Product';

interface Props {
  product: ProductData;
}

const ProductItem = ({product}: Props): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const data = product.data;

  const [image, setImage] = useState('');
  useEffect(() => {
    getImageFromStorage(data.imageUrl).then(response => setImage(response));
  }, []);

  const navigateToProductDetail = () => {
    navigation.navigate('ProductDetail', {product: data.name});
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image && (
          <PressableImage
            source={image}
            style={styles.image}
            onPress={navigateToProductDetail}
          />
        )}
        <View style={styles.vote}>
          <Icon name="star" color={Colors.white} size={30} />
          <Text
            style={[styles.number, {color: Colors.white, fontWeight: '400'}]}>
            {data.rating}
          </Text>
        </View>
      </View>
      <View style={styles.infor}>
        <PressableText
          text={data.name}
          style={styles.productName}
          onPress={navigateToProductDetail}
        />
        <View style={styles.figures}>
          <Text style={styles.number}>${data.price}</Text>
          <Text style={[styles.number, {color: Colors.theme}]}>
            {data.point} Pts
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    elevation: 1,
    marginVertical: 12,
    flexDirection: 'row',
  },
  title: {
    color: Colors.black,
    fontSize: 4,
    fontWeight: '600',
  },
  imageContainer: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '90%',
    borderRadius: 20,
  },
  vote: {
    width: '70%',
    height: 45,
    bottom: 0,
    paddingHorizontal: 8,
    position: 'absolute',
    backgroundColor: Colors.orange,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  infor: {
    width: '60%',
    paddingHorizontal: 16,
  },
  productName: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: '500',
    height: 72,
  },
  figures: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  number: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: '500',
  },
});
