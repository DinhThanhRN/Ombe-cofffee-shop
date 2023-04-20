import React from 'react';
import {View, Pressable, StyleSheet, ViewStyle, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../config/colors';

interface Props {
  style?: ViewStyle;
  color?: string;
  onPress?: () => void;
}

const BackButton = ({style, color, onPress}: Props): JSX.Element => {
  return (
    <Pressable
      style={({pressed}) => pressed && {opacity: 0.5}}
      onPress={onPress}>
      <View style={[styles.container, style]}>
        <Icon
          name="keyboard-backspace"
          color={color ?? Colors.white}
          size={40}
          style={{fontWeight: 'bold'}}
        />
      </View>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 30,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
