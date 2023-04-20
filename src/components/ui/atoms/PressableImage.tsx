import React from 'react';
import {View, Image, StyleSheet, Pressable, ImageStyle} from 'react-native';

interface Props {
  source: string;
  style?: ImageStyle;
  onPress?: () => void;
}

const PressableImage = ({source, style, onPress}: Props): JSX.Element => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.container, {opacity: 0.5}] : styles.container
      }
      onPress={onPress}>
      <Image source={{uri: source}} style={style} />
    </Pressable>
  );
};

export default PressableImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
