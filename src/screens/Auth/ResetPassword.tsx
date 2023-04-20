import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Greeting from '../../components/Auth/Greeting';
import InforInput from '../../components/Auth/InforInput';
import FlatButton from '../../components/ui/atoms/FlatButton';
import PressableText from '../../components/ui/atoms/PressableText';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NavigationProps} from '../../utils/types/NavigationProps';
import {resetPasswordWithEmail} from '../../services/Auth/authWithEmail';

const ResetPassword = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<any>();
  const email = route.params.email;

  const resetPassword = async () => {
    resetPasswordWithEmail(email).then(reponse => console.log(reponse));
    // navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Greeting
        title="Forget Password"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor"
        style={styles.greeting}
      />
      <InforInput label="Password" secure={true} />
      <FlatButton
        title="SUBMIT"
        style={styles.button}
        onPress={resetPassword}
      />
      <View style={styles.login}>
        <Text style={{fontSize: 16}}>Sign in to your registered</Text>
        <PressableText text="Login here" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  greeting: {
    paddingVertical: 12,
  },
  button: {
    marginVertical: 20,
  },
  login: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    // paddingVertical: 20,
  },
});
