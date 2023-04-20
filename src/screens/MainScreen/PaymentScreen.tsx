import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/ui/molecules/Header';
import Content from '../../components/MainScreens/Payment/Content';
import {Sizes} from '../../config/sizes';

const PaymentScreen = ({route}: any): JSX.Element => {
  const order = route.params.order;

  return (
    <View style={styles.container}>
      <Header title="Checkout" />
      <Content />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.globalPadding,
    paddingVertical: Sizes.globalPadding + 4,
  },
});
