import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PaymentCard from '../ui/PaymentCard';
import Collapsible from 'react-native-collapsible';
import InforInput from '../../../Auth/InforInput';
import FlatButton from '../../../ui/atoms/FlatButton';
import {Colors} from '../../../../config/colors';
import {formatNumber} from '../../../../utils/functions/Miscellaneous/formatNumber';

const PaymentMethod = (): JSX.Element => {
  const [isOpened, setOpened] = useState(false);
  const [index, setIndex] = useState<number>(-1);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.paymentChoice}>
        <PaymentCard
          label="Credit Card"
          focused={index === 0}
          onPress={() => {
            if (index !== 0) setIndex(0);
            else setIndex(-1);
          }}
        />
        <Collapsible collapsed={index !== 0}>
          <InforInput label="Card Holder Name" />
          <InforInput label="Card Holder Name" />
          <View style={{flexDirection: 'row'}}>
            <InforInput label="Card Holder Name" />
            <InforInput label="Card Holder Name" />
          </View>
        </Collapsible>
        <PaymentCard
          label="Virtual Account"
          focused={index === 1}
          onPress={() => {
            if (index !== 1) setIndex(1);
            else setIndex(-1);
          }}
        />
        <Collapsible collapsed={index !== 1}>
          <InforInput label="Card Holder Name" />
          <InforInput label="Card Number Name" />
          <View style={{flexDirection: 'row'}}>
            <InforInput
              label="Month/Year"
              inputProps={{
                containerStyle: {width: '50%', header: 100, paddingVertical: 4},
              }}
            />
            <InforInput
              label="CVV"
              inputProps={{
                containerStyle: {width: '50%', header: 100, paddingVertical: 4},
              }}
            />
          </View>
        </Collapsible>
        <PaymentCard
          label="Bank Trasfer"
          focused={index === 2}
          onPress={() => {
            if (index !== 2) setIndex(2);
            else setIndex(-1);
          }}
        />
        <Collapsible collapsed={index !== 2}>
          <InforInput label="Card Holder Name" />
          <InforInput label="Card Number" />
          <View style={{flexDirection: 'row'}}>
            <InforInput
              label="Month/Year"
              inputProps={{
                containerStyle: {width: '50%', header: 100, paddingVertical: 4},
              }}
            />
            <InforInput
              label="CVV"
              inputProps={{
                containerStyle: {width: '50%', header: 100, paddingVertical: 4},
              }}
            />
          </View>
        </Collapsible>
        <View style={styles.totalPayment}>
          <Text style={{fontSize: 20}}>Total Payment: </Text>
          <Text style={{color: Colors.black, fontSize: 28, fontWeight: '500'}}>
            {formatNumber(158)}
          </Text>
        </View>
      </ScrollView>

      <FlatButton
        title="NEXT"
        containerStyle={styles.button}
        style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <Icon name="arrow-right" color={Colors.white} size={50} />
      </FlatButton>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentChoice: {
    flex: 0.75,
    // zIndex: 0,
  },
  totalPayment: {
    height: 60,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.25,
    justifyContent: 'space-between',
  },
});
