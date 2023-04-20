import React from 'react';
import {View, ViewStyle, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../config/colors';

interface Props {
  name: string;
  color?: string;
  size?: number;
  style?: ViewStyle;
  onPress?: () => void;
}

const IconButton = ({name, color, size, onPress}: Props): JSX.Element => {
  return (
    <Pressable
      style={({pressed}) => pressed && {opacity: 0.5}}
      onPress={onPress}>
      <View>
        <Icon
          name={name}
          color={color ? color : Colors.theme}
          size={size ? size : 40}
        />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
});
