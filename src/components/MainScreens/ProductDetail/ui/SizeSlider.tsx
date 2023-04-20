import React, {useState} from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import {Colors} from '../../../../config/colors';

interface Props {
  size?: number;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  onSizeChange?: (value: Array<number>) => void;
}

const SizeSlider = ({
  containerStyle,
  style,
  size,
  onSizeChange,
}: Props): JSX.Element => {
  const renderThumbComponent = () => {
    return (
      <View style={styles.thumbContainer}>
        <View style={styles.thumb}></View>
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Slider
        value={size}
        onValueChange={onSizeChange}
        renderThumbComponent={renderThumbComponent}
        trackStyle={styles.track}
        minimumTrackTintColor={Colors.theme}
        maximumTrackTintColor="#ececec"
        containerStyle={{...styles.slider, ...style}}
      />
      <View style={styles.option}>
        <Text style={styles.size}>Small</Text>
        <Text style={styles.size}>Medium</Text>
        <Text style={styles.size}>Large</Text>
        <Text style={styles.size}>Xtra Large</Text>
      </View>
    </View>
  );
};

export default SizeSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 12,
  },
  slider: {
    marginVertical: 24,
    width: '90%',
    alignSelf: 'center',
    // alignItems: 'center',
  },
  thumbContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(4,118,78,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.theme,
  },
  track: {
    height: 14,
    borderRadius: 9,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  size: {
    color: Colors.normalText,
    fontSize: 20,
    fontWeight: '400',
  },
});
