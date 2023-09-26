// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//import { FontAwesome as Icon } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';

import Login from '../layouts/Login';
import Register from '../layouts/Register';
import App from './App';
import BottomNav from '../components/BottomNav';
import Favorites from '../views/Favorites';
import SocialUI1 from '../layouts/Main'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackNavigation({props}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="App" component={BottomNav} options={{ headerShown: false }}  />
      </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}