import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';

import {Colors} from '../../../config/colors';
import IconButton from '../atoms/IconButton';
import BackButton from '../atoms/BackButton';

interface Props {
  title: string;
  color?: string;
  renderLeftIcon?: any;
  style?: ViewStyle;
  // onPress?: () => void;
}

const Header = ({title, color, renderLeftIcon, style}: Props): JSX.Element => {
  const navigation = useNavigation();

  const openDrawer = () => {
    console.log('Open drawer, please');
    navigation.dispatch(DrawerActions.openDrawer());
    navigation.goBack();
  };

  return (
    <View style={[styles.container, style]}>
      <BackButton
        onPress={() => navigation.goBack()}
        color={color ?? Colors.black}
      />
      <Text style={color ? [styles.text, {color: color}] : styles.text}>
        {title}
      </Text>
      {renderLeftIcon ? (
        renderLeftIcon()
      ) : (
        <IconButton
          name={'dots-vertical'}
          color={color ?? Colors.black}
          size={48}
          onPress={openDrawer}
          style={{opacity: 0.2}}
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
