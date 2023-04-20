import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationProps} from '../../utils/types/NavigationProps';
import {Colors} from '../../config/colors';
import Header from '../../components/ui/molecules/Header';
import Search from '../../components/ui/atoms/Search';
import Content from '../../components/MainScreens/Wishlist/Content';

const WishlistScreen = (): JSX.Element => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Wishlist',
      drawerIcon: () => (
        <Icon name="heart-outline" size={30} color={Colors.theme} />
      ),
      drawerActiveTintColor: Colors.theme,
      drawerActiveBackgroundColor: 'none',
      drawerStyle: {
        fontSize: 20,
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Wishlist" style={{flex: 0.1}} />
      <Content containerStyle={{flex: 0.9}} />
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
