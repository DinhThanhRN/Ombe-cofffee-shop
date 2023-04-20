import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import {useSelector} from 'react-redux';

import ProductsList from '../../../ui/molecules/ProductsList';
import CategoryTab from './CategoryTab';
import {databaseURL} from '../../../../utils/ServerURLs';
import {queryStructure} from '../../../../utils/functions/QueryStructures';
import {tranferProductDataToUsableProductData} from '../../../../utils/functions/DataFormater/formatProductData';
import {RootState} from '../../../../reducers/store';

interface Props {
  containerStyle?: ViewStyle;
  name: string;
}

const CategorySwiper = ({name, containerStyle}: Props): JSX.Element => {
  const {token} = useSelector((state: RootState) => state.authentication);
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .post(
        `${databaseURL}:runQuery`,
        queryStructure({
          collectionId: 'products',
          queryBy: 'category',
          operator: 'EQUAL',
          value: name,
        }),
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => {
        const result = response.data.map((item: any) => {
          const id = item.document.name.split('/').at(-1);
          return {
            id,
            data: tranferProductDataToUsableProductData(item.document.fields),
          };
        });
        setProducts(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <CategoryTab
        currentIndex={index}
        onIndexChanged={index => setIndex(index)}
        containerStyle={{flex: 0.1, marginBottom: 16}}
      />
      <Swiper
        index={index}
        loop={false}
        showsPagination={false}
        containerStyle={{flex: 0.9}}
        onIndexChanged={index => setIndex(index)}>
        <ProductsList data={products} />
        <ProductsList data={products} />
        <ProductsList data={products} />
      </Swiper>
    </View>
  );
};

export default CategorySwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
