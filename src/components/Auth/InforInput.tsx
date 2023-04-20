import {Input} from '@rneui/themed';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import PressableIcon from '../ui/atoms/PressableIcon';

interface Props {
  label: string;
  isInvalid?: boolean;
  errorMessage?: string;
  placeholder?: string;
  secure?: boolean;
  inputProps?: any;
}

const InforInput = ({
  label,
  errorMessage,
  placeholder,
  secure,
  inputProps,
  isInvalid,
}: Props): JSX.Element => {
  return (
    <Input
      rightIcon={secure && <PressableIcon name="eye" />}
      label={<Text style={styles.label}>{label}</Text>}
      errorMessage={isInvalid && errorMessage}
      errorStyle={styles.error}
      renderErrorMessage={true}
      placeholder={placeholder}
      secureTextEntry={secure}
      containerStyle={styles.container}
      {...inputProps}
    />
  );
};

export default InforInput;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    paddingVertical: 4,
  },
  label: {
    fontSize: 16,
    paddingLeft: 4,
    paddingVertical: 6,
  },
  error: {
    color: 'red',
    fontSize: 14,
  },
});
