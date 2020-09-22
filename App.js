// In App.js in a new project
import {Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/home";
import Login from "./screens/login";
import Pick from "./screens/pick";
console.disableYellowBox=true;
const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}   />
        <Stack.Screen name="Pick" component={Pick} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;