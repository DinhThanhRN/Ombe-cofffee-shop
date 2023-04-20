import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import ProductBox from './ui/ProductBox';
import CategoriesSlider from './ui/CategoriesSlider';
import ProductsList from '../../ui/molecules/ProductsList';
import PressableText from '../../ui/atoms/PressableText';
import {Colors} from '../../../config/colors';
import {AppDispatch, RootState} from '../../../reducers/store';
import {databaseURL} from '../../../utils/ServerURLs';
import {tranferProductDataToUsableProductData} from '../../../utils/functions/DataFormater/formatProductData';
import {setProducts} from '../../../reducers/product';
import {login} from '../../../reducers/authentication';
import {firebase} from '@react-native-firebase/auth';

const images = [
  '/product-image/creamy-icon-coffee.png',
  '/product-image/indonesian-tea.png',
  '/product-image/creamy-icon-coffee.png',
  '/product-image/indonesian-tea.png',
];

const Content = (): JSX.Element => {
  const {products} = useSelector((state: RootState) => state.product);
  const {token, email} = useSelector(
    (state: RootState) => state.authentication,
  );
  const dispatch = useDispatch<AppDispatch>();

  // Get new token if token is expired
  useEffect(() => {
    firebase.auth().onIdTokenChanged(user => {
      if (user) {
        user.getIdToken().then(idToken => {
          dispatch(login({token: idToken, email}));
        });
      }
    });
  }, [token]);

  // Get all products from database
  useEffect(() => {
    axios
      .get(`${databaseURL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const data = response.data.documents.map((item: any) => {
          const productID = item.name.split('/').at(-1);
          return {
            id: productID,
            data: tranferProductDataToUsableProductData(item.fields),
          };
        });
        dispatch(setProducts(data));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}: any) => {
    return <ProductBox imageURL={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{height: 350}}
        data={images}
        renderItem={renderItem}
        horizontal={true}></FlatList>
      <CategoriesSlider />
      <View style={styles.productsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Featured Beverages</Text>
          <PressableText text="More" style={styles.pressableText} />
        </View>
        <ProductsList data={products} />
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  productsContainer: {},
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
