import React, {ReactNode} from 'react';
import {View, Pressable, StyleSheet, ViewStyle, Text} from 'react-native';
import {Colors} from '../../../config/colors';

interface Props {
  title: string;
  titleColor?: string;
  children?: ReactNode;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

const FlatButton = ({
  title,
  titleColor,
  children,
  containerStyle,
  style,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [containerStyle, {opacity: 0.8}] : containerStyle
      }
      onPress={onPress}>
      <View style={[styles.container, style]}>
        {children}
        <Text
          style={[styles.buttonText, titleColor ? {color: titleColor} : null]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    marginVertical: 6,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    backgroundColor: Colors.theme,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
  },
});
