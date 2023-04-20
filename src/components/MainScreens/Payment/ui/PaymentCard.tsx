import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RadioButton from '../../../ui/atoms/RadioButton';
import {Colors} from '../../../../config/colors';

interface Props {
  focused: boolean;
  onPress?: () => void;
  label: string;
}

const PaymentCard = ({focused, label, onPress}: Props): JSX.Element => {
  //   const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.left}>
          <RadioButton focused={focused} />
          <Text style={styles.text}>{label}</Text>
        </View>

        <Icon
          name={focused ? 'arrow-drop-up' : 'arrow-drop-down'}
          color={Colors.black}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    marginVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: Colors.normalText,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {
    // width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 18,
  },
});
