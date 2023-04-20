import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../config/colors';

const ActiveDot = () => {
  return <View style={styles.activeDot}></View>;
};

export default ActiveDot;

const styles = StyleSheet.create({
  activeDot: {
    width: 30,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.theme,
    margin: 4,
  },
});
