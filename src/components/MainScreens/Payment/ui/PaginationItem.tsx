import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  children: string;
  index: number;
  total: number;
}

const PaginationItem = ({children, index, total}: Props): JSX.Element => {
  //   console.log(index);
  return (
    <TouchableOpacity>
      <View style={styles.pagination}>
        <Text
          style={
            index === 1 ? [styles.text, {fontWeight: 'bold'}] : styles.text
          }>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaginationItem;

const styles = StyleSheet.create({
  container: {},
  pagination: {
    height: 48,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    // paddingHorizontal: 12,
  },
});
