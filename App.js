import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import BMIInput from './Pages/BMIInput';
import BMIResult from './Pages/BMIResult';
import Recommendation from './Pages/Recommendation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BMIInput" 
          component={BMIInput} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BMIResult" 
          component={BMIResult} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Recommendation" 
          component={Recommendation} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
