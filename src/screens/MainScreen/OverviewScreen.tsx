import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../config/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/MainScreens/Overview/Header';
import Content from '../../components/MainScreens/Overview/Content';
import {useDrawerStatus} from '@react-navigation/drawer';

const Home = (): JSX.Element => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   title: 'Home',
    //   drawerIcon: () => <Icon name="home" size={30} color={Colors.theme} />,
    //   drawerActiveTintColor: Colors.theme,
    //   drawerActiveBackgroundColor: 'none',
    //   drawerStyle: {
    //     fontSize: 20,
    //   },
    // });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Content />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 8,
  },
});
