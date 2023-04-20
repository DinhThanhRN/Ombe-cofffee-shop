import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FlatButton from '../../components/ui/atoms/FlatButton';
import {Colors} from '../../config/colors';

const OnboardingAuth = ({navigation}: any): JSX.Element => {
  const handlePressLogin = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../asset/image/ombe-logo.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Coffee Shop App</Text>
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Morning begins with Ombe coffee</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <FlatButton
          title="Login With Email"
          style={styles.emailButton}
          onPress={handlePressLogin}>
          <Icon name="email" color="#fff" size={30} style={styles.icon} />
        </FlatButton>
        <FlatButton
          title="Login With Facebook"
          style={styles.facebookButton}
          onPress={handlePressLogin}>
          <Icon name="facebook" color="#fff" size={30} style={styles.icon} />
        </FlatButton>
        <FlatButton
          title="Login With Google"
          titleColor={Colors.theme}
          style={styles.googleButton}
          onPress={handlePressLogin}>
          <Icon name="google" color="#ff7f23" size={30} style={styles.icon} />
        </FlatButton>
      </View>
    </View>
  );
};

export default OnboardingAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
  },
  imageContainer: {
    flex: 0.4,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 250,
  },
  greetingContainer: {
    flex: 0.2,
    paddingHorizontal: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
  },
  buttonsContainer: {
    flex: 0.4,
    justifyContent: 'center',
  },
  emailButton: {
    marginBottom: 30,
  },
  facebookButton: {
    backgroundColor: '#376aed',
  },
  googleButton: {
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  icon: {
    left: 24,
    position: 'absolute',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 12,
  },
});
