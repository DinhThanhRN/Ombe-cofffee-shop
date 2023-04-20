import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Colors} from '../../../../config/colors';
import PressableText from '../../../ui/atoms/PressableText';
import {getImageFromStorage} from '../../../../utils/functions/getImageFromStorage';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../../utils/types/NavigationProps';

interface Props {
  // children?: ReactNode;
  imageURL: string;
}

const ProductBox = ({imageURL}: Props): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const [image, setImage] = useState('');
  useEffect(() => {
    getImageFromStorage(imageURL).then(response =>
      setImage(response.toString()),
    );
  }, []);

  const navigateToProductDetail = () => {
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{uri: image}} style={styles.image} />}
      <View style={styles.background}>
        <PressableText
          text="Creamy Ice Coffee"
          style={styles.name}
          onPress={navigateToProductDetail}
        />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ 5.8</Text>
          <Text style={styles.previousPrice}>$ 9.9</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginHorizontal: 4,
  },
  background: {
    width: 250,
    height: 275,
    paddingHorizontal: 16,
    paddingVertical: 30,
    top: 72,
    backgroundColor: Colors.theme,
    borderRadius: 40,
    zIndex: 0,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  image: {
    width: 200,
    height: 250,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    alignSelf: 'center',
  },
  name: {
    color: Colors.white,
    textDecorationLine: 'none',
    fontSize: 22,
    paddingVertical: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  price: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: '500',
  },
  previousPrice: {
    color: '#ccc',
    fontSize: 20,
    textDecorationLine: 'line-through',
    fontWeight: '600',
    paddingLeft: 12,
  },
});
