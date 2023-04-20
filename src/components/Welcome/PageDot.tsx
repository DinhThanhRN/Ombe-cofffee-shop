import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../config/colors';

const PageDot = (): JSX.Element => {
  return <View style={styles.dot}></View>;
};

export default PageDot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 12,
    height: 12,
    marginHorizontal: 8,
    marginVertical: 80,
    borderRadius: 6,
  },
});
