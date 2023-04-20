import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './src/screens/Welcome';
import AuthStack from './src/screens/Auth/AuthStack';
import MainScreen from './src/screens/MainScreen/MainScreen';
import {Provider} from 'react-redux';
import {store} from './src/reducers/store';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="WelcomeScreen" component={Welcome} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
