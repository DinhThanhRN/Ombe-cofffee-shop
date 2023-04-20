import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './SignUpScreen';
import OnboardingAuth from './OnboardingAuth';
import SignInScreen from './SignInScreen';
import {useLayoutEffect} from 'react';
import ResetPassword from './ResetPassword';

const Stack = createStackNavigator();

const AuthStack = ({navigation}: any): JSX.Element => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingAuthScreen" component={OnboardingAuth} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
