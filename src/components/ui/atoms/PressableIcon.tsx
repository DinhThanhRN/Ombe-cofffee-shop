import React from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../config/colors';

interface Props {
  name: string;
  color?: string;
  size?: number;
  style?: ViewStyle;
  onPress?: () => void;
}

const PressableIcon = ({
  name,
  color,
  size,
  style,
  onPress,
}: Props): JSX.Element => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.container, {opacity: 0.5}] : [styles.container]
      }
      onPress={onPress}>
      <Icon
        name={name}
        color={color ? color : Colors.theme}
        size={size ? size : 24}
        style={style}
      />
    </Pressable>
  );
};

export default PressableIcon;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
});
