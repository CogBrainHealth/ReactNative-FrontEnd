import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/signUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signUp" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;