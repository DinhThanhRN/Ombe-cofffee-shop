import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../../config/colors';

interface Props {
  value: number;
}

const RateCircle = ({value}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.rating}>{value}</Text>
    </View>
  );
};

export default RateCircle;

const styles = StyleSheet.create({
  container: {
    right: 12,
    top: 0,
    position: 'absolute',
    width: 80,
    height: 80,
    padding: 12,
    backgroundColor: Colors.brightOrange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    elevation: 8,
    shadowOffset: {width: 2, height: 2},
    shadowColor: Colors.orange,
    shadowRadius: 40,
    shadowOpacity: 0.5,
    zIndex: 1,
  },
  rating: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
