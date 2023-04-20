import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ViewStyle, FlatList} from 'react-native';
import Search from '../../ui/atoms/Search';
import FavoriteCard from './ui/FavoriteCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../../reducers/store';
import {ProductData} from '../../../interfaces/Product';
import {queryProducts} from '../../../utils/functions/database/product/queryProducts';

interface Props {
  containerStyle?: ViewStyle;
}
const Content = ({containerStyle}: Props): JSX.Element => {
  const {user} = useSelector((state: RootState) => state.user);
  const {token} = useSelector((state: RootState) => state.authentication);
  const [favoriteProducts, setFavoriteProducts] = useState<ProductData[]>([
    {
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
    },
  ]);

  useEffect(() => {
    queryProducts(user.data.favorites, token)
      .then(response => {
        setFavoriteProducts(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

  const renderItem = ({item}: any) => {
    return <FavoriteCard product={item} />;
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <Search />
      <FlatList
        data={favoriteProducts}
        renderItem={renderItem}
        scrollEnabled={true}
        contentContainerStyle={{marginTop: 24}}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});
