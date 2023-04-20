import React, {ReactNode} from 'react';
import {Pressable, Text, StyleSheet, TextStyle, View} from 'react-native';
import {Colors} from '../../../config/colors';

interface Props {
  text: string;
  onPress?: () => void;
  style?: TextStyle;
  children?: ReactNode;
}

const PressableText = ({text, onPress, style, children}: Props) => {
  return (
    <Pressable
      style={({pressed}) => pressed && {opacity: 0.5}}
      onPress={onPress}>
      <View style={styles.container}>
        {children}
        <Text style={[styles.text, style]}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default PressableText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.theme,
    textDecorationColor: Colors.theme,
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 8,
  },
});
