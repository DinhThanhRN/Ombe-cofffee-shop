import React, {ReactNode} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FlatButton from '../ui/atoms/FlatButton';
import {Colors} from '../../config/colors';
import {NavigationProps} from '../../utils/types/NavigationProps';

interface Props {
  children?: ReactNode;
}
const firebaseConfig = {
  projectId: 'ombe-coffeee-shop-app',
  apiKey: 'AIzaSyAm30ghChvrQ_oHORGgIZPCLqoWSCMrJ9s',
  appId: '1:16229969776:android:660aae957cd1a47da2e9b5',
  databaseURL: 'https://ombe-coffeee-shop-app.firebaseio.com',
  messagingSenderId: '16229969776',
  storageBucket: 'ombe-coffeee-shop-app.appspot.com',
};
// firebase.initializeApp(firebaseConfig);

const WelcomSlider = ({children}: Props) => {
  const navigation = useNavigation<NavigationProps>();

  const handlePressStart = () => {
    navigation.navigate('AuthStack');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{children}</View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Let's meet our some summer coffee drinks
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          Life should be enjoyed and lived to the fullest. It is important to
          have fun and enjoy the moment that life has to offer.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton title="GET STARTED" onPress={handlePressStart}></FlatButton>
      </View>
    </View>
  );
};

export default WelcomSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 0.1,
    alignItems: 'center',
  },
  title: {
    color: Colors.text,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 0.2,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.text,
    fontWeight: '300',
  },
  buttonContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
});
