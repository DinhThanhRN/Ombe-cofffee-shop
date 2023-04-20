import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import {Colors} from '../../../config/colors';
import FlatButton from '../../ui/atoms/FlatButton';
import OrderCounter from './ui/OrderCounter';
import SizeSlider from './ui/SizeSlider';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../utils/types/NavigationProps';
import {ProductData} from '../../../interfaces/Product';
import {useSelector} from 'react-redux';
import {RootState} from '../../../reducers/store';
import {Order} from '../../../interfaces/Order';
import {formatNumber} from '../../../utils/functions/Miscellaneous/formatNumber';
import {queryProductByName} from '../../../utils/functions/database/product/queryProductByName';

interface Props {
  name: string;
}

const DetailOverlap = ({name}: Props): JSX.Element => {
  const {token} = useSelector((state: RootState) => state.authentication);
  const navigation = useNavigation<NavigationProps>();

  const [sliderValue, setSliderValue] = useState(0.1);

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
  const [order, setOrder] = useState<Order>({
    name: name,
    quantity: 1,
    size: 'small',
    createdAt: new Date().toString(),
    status: 'on delivery',
    total: 0,
  });
  // Retrieve product's information from database
  useEffect(() => {
    queryProductByName(name, token).then(response => {
      setProduct(response);
    });
  }, []);

  const handleIncreasingOrder = () => {
    setOrder({...order, quantity: order.quantity + 1});
  };
  const handleDecreasingOrder = () => {
    if (order.quantity > 1) setOrder({...order, quantity: order.quantity - 1});
  };

  const placeOrder = () => {
    const now = new Date().toISOString();
    setOrder({
      ...order,
      createdAt: now,
      total: order.quantity * product.data.price,
      status: 'on delivery',
    });
    console.log(order);

    navigation.navigate('PaymentScreen', {order});
  };

  return (
    <View style={styles.container}>
      <View style={styles.introduce}>
        <Text style={styles.name}>{product.data.name}</Text>
        <Text style={styles.description}>{product.data.description}</Text>
      </View>
      <SizeSlider
        containerStyle={styles.sizeSlider}
        size={sliderValue}
        onSizeChange={([val]) => {
          setSliderValue(val);
          if (val <= 0.1) setOrder({...order, size: 'small'});
          else if (val <= 0.5) setOrder({...order, size: 'medium'});
          else if (val <= 0.75) setOrder({...order, size: 'large'});
          else setOrder({...order, size: 'xtra-large'});
        }}
      />
      <View style={styles.orderContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.discountPrice}>{product.data.price}</Text>
          <Text style={styles.oldPrice}>$ 8.0</Text>
        </View>
        <OrderCounter
          value={order.quantity}
          onIncrease={handleIncreasingOrder}
          onDecrease={handleDecreasingOrder}
        />
      </View>
      <FlatButton
        title="PLACE ORDER"
        containerStyle={styles.button}
        style={{flexDirection: 'row-reverse'}}
        onPress={placeOrder}>
        <Text style={styles.total}>
          {formatNumber(order.quantity * product.data.price)}
        </Text>
      </FlatButton>
    </View>
  );
};

export default DetailOverlap;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '95%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    zIndex: 0,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: Colors.white,
  },
  introduce: {
    flex: 0.25,
    paddingVertical: 2,
  },
  name: {
    width: '80%',
    color: Colors.black,
    fontSize: 22,
    fontWeight: '700',
  },
  description: {
    color: Colors.normalText,
    width: '100%',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '400',
  },
  sizeSlider: {
    flex: 0.35,
  },
  orderContainer: {
    flex: 0.25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  oldPrice: {
    color: 'rgba(0,0,0,.5)',
    fontSize: 20,
    textDecorationLine: 'line-through',
    paddingHorizontal: 12,
    fontWeight: '500',
  },
  button: {
    flex: 0.15,
    paddingHorizontal: 12,
  },
  total: {
    color: 'rgba(255,255,255,.5)',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
});
