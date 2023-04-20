import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Sizes} from '../../config/sizes';

const OwnOrder = (): JSX.Element => {
  return <View style={styles.container}></View>;
};

export default OwnOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Sizes.globalPadding,
  },
});
