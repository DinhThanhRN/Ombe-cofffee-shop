import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';

const DeliveryTracking = (): JSX.Element => {
  return <View style={styles.container}></View>;
};

export default DeliveryTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  customView: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
  },
  customText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
