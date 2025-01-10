import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/signUp';
import Suggestion from './src/suggestion';
import CheckList from './src/checkList';
import ModalTest from './src/modalTest';
import Home from './src/home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="checkList" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="suggestion" component={Suggestion} />
        <Stack.Screen name="checkList" component={CheckList} />
        <Stack.Screen name="modalTest" component={ModalTest} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;