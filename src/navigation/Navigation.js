// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';

import HomeScreen from '../views/Home';
import Search from '../views/Search';
import FilmDetail from '../views/FilmDetail';
import Favorites from '../views/Favorites';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SearchStackNavigation({props}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="FilmDetail"
          initialParams={{ itemId: 42, otherParam:0, viewTitle: "" }}
          options={({ route }) => ({ title: route.params.viewTitle })}  component={FilmDetail}  />
      </Stack.Navigator>
  );
}

function FavoritesStackNavigation({props}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Favorites" options={{ title: 'Mes Favoris' }}   component={Favorites}  />
        <Stack.Screen name="FilmDetail"
          initialParams={{ itemId: 42, otherParam:0, viewTitle: "" }}
          options={({ route }) => ({ title: route.params.viewTitle })}  component={FilmDetail}  />
      </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: '#122504',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '400',
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Acceuil',
            tabBarIcon: ({ color, size }) => (
              <Icon name="music" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Play" component={HomeScreen} 
          options={{
            tabBarLabel: 'Play',
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Recherche" component={SearchStackNavigation} 
          options={{
            tabBarLabel: 'Recherche',
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Profile" component={FavoritesStackNavigation} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}