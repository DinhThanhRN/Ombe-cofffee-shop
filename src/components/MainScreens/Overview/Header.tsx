import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';

import Search from '../../ui/atoms/Search';
import UserGreeting from './ui/UserGreeting';
import IconButton from '../../ui/atoms/IconButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../utils/types/NavigationProps';
import {DrawerActions} from '@react-navigation/native';

interface Props {
  containerStyle?: ViewStyle;
}

const Header = ({containerStyle}: Props): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.top}>
        <UserGreeting />
        <View style={styles.buttons}>
          <IconButton name="cart-outline" />
          <IconButton
            name="view-list"
            color="#Aeaeae"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </View>
      </View>
      <Search />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
