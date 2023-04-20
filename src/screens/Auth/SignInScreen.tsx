import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import InforInput from '../../components/Auth/InforInput';
import FlatButton from '../../components/ui/atoms/FlatButton';
import PressableText from '../../components/ui/atoms/PressableText';
import {Colors} from '../../config/colors';
import Greeting from '../../components/Auth/Greeting';
import {NavigationProps} from '../../utils/types/NavigationProps';
import {Credentials} from '../../interfaces/Credentials';
import {signInWithEmail} from '../../services/Auth/authWithEmail';
import LoadingOverlay from '../../components/ui/atoms/LoadingOverlay';
import MainScreen from '../MainScreen/MainScreen';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../reducers/store';
import {login} from '../../reducers/authentication';
import {setUser} from '../../reducers/user';
import {queryUserInforByEmail} from '../../utils/functions/database/user/queryUserInforByEmail';

const SignInScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProps>();
  const {isAuthenticated} = useSelector(
    (state: RootState) => state.authentication,
  );
  const dispatch = useDispatch<AppDispatch>();

  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });
  const [isInvalidEmail, setInvalidEmail] = useState(false);
  const [isInvalidPassword, setInvalidPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkInvalidEmail = () => {
    const email = credentials.email;
    if (!email || !email.includes('@') || !email.includes('.')) {
      setInvalidEmail(true);
    } else setInvalidEmail(false);
  };
  const checkInvalidPassword = () => {
    const password = credentials.password;
    if (!password || password.length < 8) setInvalidPassword(true);
    else setInvalidPassword(false);
  };

  const handleSignIn = async () => {
    if (!isInvalidEmail || !isInvalidPassword) {
      setIsAuthenticating(true);
      try {
        const token = await signInWithEmail(
          credentials.email,
          credentials.password,
        );
        dispatch(login({token, email: credentials.email}));
        const userInfor = await queryUserInforByEmail(credentials.email, token);
        dispatch(setUser(userInfor));
        // setIsAuthenticated(true);
      } catch (error) {
        Alert.alert(
          'Login failed!',
          'Wrong credentials, please check your email and password',
        );
      }
      setIsAuthenticating(false);
    } else {
      Alert.alert(
        'Login failed!',
        'Invalid credentials, please check your email and password',
      );
    }
  };
  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleResetPassword = () => {
    if (isInvalidEmail) {
      Alert.alert(
        'Empty or wrong email',
        'Enter your email before reseting password',
      );
    } else navigation.navigate('ResetPassword', {email: credentials.email});
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in ..." />;
  }

  if (isAuthenticated) {
    return <MainScreen />;
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.imageContainer}>
        <Greeting
          title="Sign In"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor"
        />
      </View>
      <KeyboardAvoidingView style={styles.fillingForm} behavior="position">
        <InforInput
          label="Email"
          placeholder="abc@example.com"
          isInvalid={isInvalidEmail}
          errorMessage={'Invalid email'}
          inputProps={{
            value: credentials.email,
            onChangeText: (text: string) =>
              setCredentials({...credentials, email: text}),
            onEndEditing: checkInvalidEmail,
          }}
        />
        <InforInput
          label="Password"
          placeholder="Enter password"
          secure={true}
          isInvalid={isInvalidPassword}
          errorMessage={'Password must have at least 8 characteristics'}
          inputProps={{
            value: credentials.password,
            onChangeText: (text: string) =>
              setCredentials({...credentials, password: text}),
            onEndEditing: checkInvalidPassword,
          }}
        />
      </KeyboardAvoidingView>
      <View style={styles.loginContainer}>
        <View style={styles.topLogin}>
          <FlatButton title="LOGIN" onPress={handleSignIn}></FlatButton>
          <View style={styles.password}>
            <Text style={styles.text}>Forgot Password?</Text>
            <PressableText
              text="Reset Password"
              onPress={handleResetPassword}
              style={styles.pressableText}
            />
          </View>
        </View>
        <View style={styles.bottomLogin}>
          <Text style={[styles.text, {color: 'rgba(0,0,0,0.3)'}]}>
            Don't have any account?
          </Text>
          <FlatButton
            title="CREATE AN ACCOUNT"
            titleColor={Colors.text}
            style={{backgroundColor: '#e4d195'}}
            onPress={handleSignUp}></FlatButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    right: 0,
    left: 0,
  },
  imageContainer: {
    flex: 0.3,
    marginBottom: 12,
  },
  fillingForm: {
    flex: 0.3,
    justifyContent: 'center',
  },
  loginContainer: {
    flex: 0.4,
    justifyContent: 'space-around',
  },
  topLogin: {
    flex: 0.5,
    justifyContent: 'space-around',
  },
  password: {
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomLogin: {
    flex: 0.5,

    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  pressableText: {
    textDecorationLine: 'underline',
  },
});
