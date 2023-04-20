import React, {useReducer, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import Greeting from '../../components/Auth/Greeting';
import InforInput from '../../components/Auth/InforInput';
import FlatButton from '../../components/ui/atoms/FlatButton';
import PressableText from '../../components/ui/atoms/PressableText';
import {NavigationProps} from '../../utils/types/NavigationProps';
import {Credentials} from '../../interfaces/Credentials';
import {signUpWithEmail} from '../../services/Auth/authWithEmail';
import {AppDispatch, RootState} from '../../reducers/store';
import {login} from '../../reducers/authentication';
import LoadingOverlay from '../../components/ui/atoms/LoadingOverlay';
import {User} from '../../interfaces/User';
import axios from 'axios';
import {databaseURL} from '../../utils/ServerURLs';
import {tranferUserDataToUserInputFormat} from '../../utils/functions/DataFormater/formatUserData';

interface InvalidChecking {
  invalidEmail: boolean;
  invalidPhone: boolean;
  invalidPassword: boolean;
}
type Action = {type: 'email'} | {type: 'phone'} | {type: 'password'};

const SignUpScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const {isAuthenticated, token} = useSelector(
    (state: RootState) => state.authentication,
  );
  const dispatch = useDispatch<AppDispatch>();

  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });
  const [inputs, setInputs] = useState<User>({
    name: '',
    phone: '',
    location: '',
    avatarURL: '',
    favorites: [],
    email: '',
  });

  const initialChecker: InvalidChecking = {
    invalidEmail: false,
    invalidPassword: false,
    invalidPhone: false,
  };
  const checkingReducer = (state: InvalidChecking, action: Action) => {
    switch (action.type) {
      case 'email':
        const email = credentials.email;
        if (!email || !email.includes('@') || !email.includes('.'))
          return {...state, invalidEmail: true};
        return state;
      case 'password':
        const password = credentials.password;
        if (!password || password.length < 8)
          return {...state, invalidPassword: true};
        return state;
      case 'phone':
        const phone = inputs.phone;
        if (!phone || phone.charAt(0) !== '0' || phone.length !== 10)
          return {...state, invalidPhone: true};
        return state;
      default:
        throw new Error();
    }
  };

  const [invalidChecker, dispatchChecking] = useReducer(
    checkingReducer,
    initialChecker,
  );

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleSignUp = async () => {
    if (!invalidChecker.invalidEmail || !invalidChecker.invalidPassword) {
      setIsAuthenticating(true);
      try {
        const token = await signUpWithEmail(
          credentials.email,
          credentials.password,
        );
        dispatch(login({token, email: credentials.email}));
        axios.post(
          `${databaseURL}/users`,
          tranferUserDataToUserInputFormat(inputs),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (isAuthenticated) navigation.goBack();
        console.log(inputs);
      } catch (error) {
        Alert.alert(
          'Login failed!',
          'Wrong credentials, please check your email and password',
        );
      }
      setIsAuthenticating(false);
      navigation.goBack();
    } else
      Alert.alert(
        'Login failed!',
        'Invalid credentials, please check your email and password',
      );
  };

  if (isAuthenticating) return <LoadingOverlay message="Signing-up ..." />;

  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Greeting
          title="Create an account"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor"
        />
      </View>
      <View style={styles.fillingForm}>
        <InforInput
          label="Name"
          placeholder="Enter your name"
          inputProps={{
            onChangeText: (text: string) => {
              setInputs({...inputs, name: text});
            },
          }}
        />
        <InforInput
          label="Email"
          placeholder="abc@example.com"
          isInvalid={invalidChecker.invalidEmail}
          errorMessage="Invalid email"
          inputProps={{
            onChangeText: (text: string) => {
              setCredentials({...credentials, email: text});
              setInputs({...inputs, email: text});
            },
            onEndEditing: () => dispatchChecking({type: 'email'}),
          }}
        />
        {/* <InforInput
          label="Phone"
          placeholder="Enter your phone"
          isInvalid={invalidChecker.invalidPhone}
          errorMessage="Invalid email"
          inputProps={{
            onChangeText: (text: string) => {
              setCredentials({...credentials, email: text});
              setInputs({...inputs, phone: text});
            },
            onEndEditing: () => dispatchChecking({type: 'phone'}),
          }}
        /> */}
        <InforInput
          label="Password"
          placeholder="Enter your password"
          secure={true}
          isInvalid={invalidChecker.invalidPassword}
          errorMessage="Password have to have at least 8 characteristices"
          inputProps={{
            onChangeText: (text: string) =>
              setCredentials({...credentials, password: text}),
            onEndEditing: () => dispatchChecking({type: 'password'}),
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <FlatButton title="SIGN UP" onPress={handleSignUp} />
        <View style={styles.termsAcceptance}>
          <Text style={{fontSize: 16}}>
            By tapping Sign up, you accept all our{' '}
          </Text>
          <PressableText
            text="terms and condition"
            style={{textDecorationLine: 'underline'}}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  greeting: {
    flex: 0.3,
  },
  fillingForm: {
    flex: 0.5,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
  termsAcceptance: {
    alignItems: 'center',
  },
});
