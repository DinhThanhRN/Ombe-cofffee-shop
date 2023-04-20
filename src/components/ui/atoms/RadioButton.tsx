import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Colors} from '../../../config/colors';

interface Props {
  focused: boolean;
  onPress?: () => void;
}

const RadioButton = ({focused, onPress}: Props): JSX.Element => {
  return (
    <Pressable
      style={
        focused ? [styles.radio, {borderColor: Colors.theme}] : styles.radio
      }
      onPress={onPress}>
      <View
        style={
          focused
            ? [styles.circle, {backgroundColor: Colors.theme}]
            : styles.circle
        }></View>
    </Pressable>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radio: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: Colors.normalText,
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    // borderWidth: 1.5,
    borderColor: Colors.black,
    // backgroundColor: Colors.theme,
  },
});
