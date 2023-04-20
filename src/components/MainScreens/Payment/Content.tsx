import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import PaymentMethod from './screens/PaymentMethod';
import ShippingAddress from './screens/ShippingAddress';
import Coupon from './screens/Coupon';
import {Colors} from '../../../config/colors';
import Swiper, {SwiperStates} from 'react-native-swiper';
import PaginationItem from './ui/PaginationItem';

const Tab = createMaterialTopTabNavigator();

const PaymentTopTab = (): JSX.Element => {
  const renderPagination = (index: number, total: number, context: Swiper) => {
    // context.componentDidMount =
    return (
      <View style={styles.paginationContainer}>
        <PaginationItem index={index} total={total}>
          Payment method
        </PaginationItem>
        <PaginationItem index={index} total={total}>
          Shipping address
        </PaginationItem>
        <PaginationItem index={index} total={total}>
          Applying coupon
        </PaginationItem>
      </View>
    );
  };
  return (
    <Swiper
      renderPagination={renderPagination}
      containerStyle={styles.container}
      loop={false}>
      <PaymentMethod />
      <ShippingAddress />
      <Coupon />
    </Swiper>
  );
};

export default PaymentTopTab;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 32,
    paddingTop: 60,
  },
  paginationContainer: {
    top: 0,
    position: 'absolute',
    marginBottom: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.theme,
  },
});
