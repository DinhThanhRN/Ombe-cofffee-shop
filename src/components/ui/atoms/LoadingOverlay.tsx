import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../../../config/colors';

interface Props {
  message: string;
}

const LoadingOverlay = ({message}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    color: Colors.theme,
    fontSize: 16,
    marginBottom: 12,
  },
});
