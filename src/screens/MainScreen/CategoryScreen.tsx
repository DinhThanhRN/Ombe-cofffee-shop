import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../../components/ui/molecules/Header';
import Search from '../../components/ui/atoms/Search';
import CategorySwiper from '../../components/MainScreens/CategoryDetail/ui/CatergorySwiper';

const CategoryScreen = ({route}: any): JSX.Element => {
  const category = route.params?.category;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Products" style={{marginBottom: 24}} />
        <Search style={styles.search} />
      </View>
      <CategorySwiper
        name={category}
        containerStyle={styles.productsContainer}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    //
  },
  header: {
    flex: 0.25,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  search: {
    marginBottom: 24,
  },
  productsContainer: {
    flex: 0.75,
  },
});
