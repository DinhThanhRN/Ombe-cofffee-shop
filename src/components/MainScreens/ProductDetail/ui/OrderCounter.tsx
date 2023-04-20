import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconButton from '../../../ui/atoms/IconButton';
import {Colors} from '../../../../config/colors';

interface Props {
  value?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

const OrderCounter = ({value, onIncrease, onDecrease}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <IconButton name="plus" onPress={onIncrease} />
      <Text style={styles.value}>{value ?? 0}</Text>
      <IconButton name="minus" onPress={onDecrease} />
    </View>
  );
};

export default OrderCounter;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    padding: 6,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'rgba(0,0,0,.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    color: Colors.black,
    fontSize: 26,
    fontWeight: '400',
  },
});
