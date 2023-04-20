import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import CategoryCard from './CategoryCard';
import {Colors} from '../../../../config/colors';
import {databaseURL} from '../../../../utils/ServerURLs';
import {AppDispatch, RootState} from '../../../../reducers/store';
import {tranferCategoryDataToUsableCategory} from '../../../../utils/functions/DataFormater/formatCategoryData';
import {setCategories} from '../../../../reducers/category';

const CategoriesSlider = (): JSX.Element => {
  const {token} = useSelector((state: RootState) => state.authentication);
  const {categories} = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    axios
      .get(`${databaseURL}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const data = response.data.documents.map((item: any) => {
          const categoryID = item.name.split('/').at(-1);
          return {
            id: categoryID,
            data: tranferCategoryDataToUsableCategory(item.fields),
          };
        });
        dispatch(setCategories(data));
      });
  }, []);

  const renderItem = ({item}: any) => {
    return <CategoryCard category={item} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesSlider;

const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingVertical: 12,
  },
  text: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600',
    paddingVertical: 12,
  },
});
