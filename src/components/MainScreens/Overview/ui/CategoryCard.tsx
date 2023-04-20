import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PressableText from '../../../ui/atoms/PressableText';
import {Colors} from '../../../../config/colors';
import IconButton from '../../../ui/atoms/IconButton';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../../utils/types/NavigationProps';
import {CategoryData} from '../../../../interfaces/Category';

interface Props {
  category: CategoryData;
}

const CategoryCard = ({category}: Props): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const data = category.data;
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <IconButton
          name={data.icon}
          onPress={() =>
            navigation.navigate('CategoryScreen', {category: data.name})
          }
        />
        <PressableText
          text={data?.name}
          style={styles.category}
          onPress={() =>
            navigation.navigate('CategoryScreen', {category: data.name})
          }
        />
      </View>
      <Text style={styles.quantity}>{data.menus} Menus</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 100,
    padding: 16,
    marginRight: 16,
    elevation: 2,
    borderRadius: 16,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 4,
  },
  category: {
    fontSize: 22,
    color: Colors.black,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  quantity: {
    left: 56,
    color: Colors.theme,
    fontSize: 18,
    fontWeight: '500',
  },
});
