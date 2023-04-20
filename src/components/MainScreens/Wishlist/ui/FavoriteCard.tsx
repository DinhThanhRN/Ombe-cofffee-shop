import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {getImageFromStorage} from '../../../../utils/functions/getImageFromStorage';
import PressableIcon from '../../../ui/atoms/PressableIcon';
import {Colors} from '../../../../config/colors';
import {ProductData} from '../../../../interfaces/Product';
import {formatNumber} from '../../../../utils/functions/Miscellaneous/formatNumber';
import PressableImage from '../../../ui/atoms/PressableImage';
import PressableText from '../../../ui/atoms/PressableText';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../../utils/types/NavigationProps';

interface Props {
  product: ProductData;
}

const FavoriteCard = ({product}: Props): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const [image, setImage] = useState('');
  useEffect(() => {
    getImageFromStorage(product.data.imageUrl)
      .then(response => setImage(response))
      .catch(error => {
        console.log(error);
      });
  }, [image]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image && (
          <PressableImage
            source={image}
            style={styles.image}
            onPress={() =>
              navigation.navigate('ProductDetail', {product: product.data.name})
            }
          />
        )}
      </View>
      <View style={styles.infor}>
        <PressableText
          text={
            product.data.name.length >= 12
              ? product.data.name.slice(0, 12) + '...'
              : product.data.name
          }
          style={styles.name}
          onPress={() =>
            navigation.navigate('ProductDetail', {product: product.data.name})
          }></PressableText>
        <Text style={styles.variant}>Variant: {product.data.variant}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>{formatNumber(product.data.price)}</Text>
          <PressableIcon name="heart" size={30} />
        </View>
      </View>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 12,
    flexDirection: 'row',
    borderRadius: 16,
    elevation: 2,
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 12,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: '100%',
    borderRadius: 20,
  },
  infor: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  name: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '500',
  },
  variant: {
    fontSize: 16,
    color: Colors.normalText,
    fontWeight: '400',
    marginHorizontal: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  price: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
