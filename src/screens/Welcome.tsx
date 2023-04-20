import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import ActiveDot from '../components/Welcome/ActiveDot';
import PageDot from '../components/Welcome/PageDot';
import WelcomSlider from '../components/Welcome/WelcomeSlider';

import {Colors} from '../config/colors';

const Welcome = ({navigation}: any): JSX.Element => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        dot={<PageDot />}
        activeDot={<ActiveDot />}
        dotStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <WelcomSlider>
          <Image
            source={require('../asset/image/welcome-image/welcome-1.png')}
            style={styles.image}
          />
        </WelcomSlider>
        <WelcomSlider>
          <Image
            source={require('../asset/image/welcome-image/welcome-2.png')}
            style={styles.image}
          />
        </WelcomSlider>
        <WelcomSlider>
          <Image
            source={require('../asset/image/welcome-image/welcome-3.png')}
            style={styles.image}
          />
        </WelcomSlider>
      </Swiper>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 2,
  },
  image: {
    width: '80%',
    height: '80%',
  },
});
