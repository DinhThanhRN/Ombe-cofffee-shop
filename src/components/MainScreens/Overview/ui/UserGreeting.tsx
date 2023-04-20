import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../../config/colors';

const UserGreeting = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good Morning</Text>
      <Text style={styles.user}>Williams</Text>
    </View>
  );
};

export default UserGreeting;

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: 100,
    padding: 4,
    justifyContent: 'center',
  },
  greeting: {
    color: Colors.text,
    fontSize: 16,
    paddingVertical: 4,
  },
  user: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
});
