import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  style?: ViewStyle;
}

const Search = ({style}: Props): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <Text>Search beveragesa and foods</Text>
      <Icon name="search" size={30} color="#ccc" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0,0,0,0.05)',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    elevation: 1,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowColor: '#ccc',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
