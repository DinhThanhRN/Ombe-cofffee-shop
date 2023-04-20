import React from 'react';
import {View, Text, StyleSheet, Image, ViewStyle} from 'react-native';
import {Colors} from '../../config/colors';

interface Props {
  title: string;
  content: string;
  style?: ViewStyle;
}

const Greeting = ({title, content, style}: Props): JSX.Element => {
  return (
    <View style={style}>
      <Image
        source={require('../../asset/image/ombe-logo.png')}
        style={styles.image}
      />
      <View style={styles.greetingContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  title: {fontSize: 24, fontWeight: '500', color: Colors.text},
  content: {color: 'rgba(0,0,0,.8)', paddingTop: 12},
  image: {
    width: 100,
    height: 150,
    alignSelf: 'center',
  },
  greetingContainer: {
    width: '90%',
    paddingHorizontal: 12,
  },
});
