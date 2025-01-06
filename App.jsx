import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/signUp';
import Suggestion from './src/suggestion';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="suggestion" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="suggestion" component={Suggestion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;