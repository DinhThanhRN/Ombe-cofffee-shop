import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ViewStyle,
  FlatListProps,
} from 'react-native';
import {Colors} from '../../../../config/colors';

interface Props {
  currentIndex?: number;
  onIndexChanged: (index: number) => void;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const CategoryTab = ({
  currentIndex = 0,
  onIndexChanged,
  containerStyle,
}: Props): JSX.Element => {
  const renderTab = ({item, index}: any) => {
    return (
      <Pressable
        style={
          index === currentIndex ? [styles.tab, styles.pressed] : styles.tab
        }
        onPress={() => onIndexChanged(index)}
        android_ripple={{color: '#d6d8e3'}}>
        <Text
          style={
            index === currentIndex
              ? [styles.text, {color: Colors.theme}]
              : styles.text
          }>
          {item}
        </Text>
      </Pressable>
    );
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={['Beverages', 'Brewed Coffee', 'Blended Coffee']}
        renderItem={renderTab}
        horizontal={true}
      />
    </View>
  );
};

export default CategoryTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.black,
  },
  tab: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  pressed: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.theme,
  },
  text: {
    color: Colors.normalText,
    fontSize: 20,
    fontWeight: '500',
  },
  pressedText: {
    color: Colors.theme,
  },
});
