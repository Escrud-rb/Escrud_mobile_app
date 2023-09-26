// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//import { FontAwesome as Icon } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from '../views/Home/Home';
import Search from '../views/Search';
import FilmDetail from '../views/FilmDetail';
import Favorites from '../views/Favorites';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SearchStackNavigation({props}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="FilmDetail"
          initialParams={{ itemId: 42, otherParam:0, viewTitle: "" }}
          options={({ route }) => ({ title: route.params.viewTitle })}  component={FilmDetail}  />
      </Stack.Navigator>
  );
}

function FavoritesStackNavigation({props}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Favorites" options={{ headerShown: false, title: 'Mes Favoris' }}   component={Favorites}  />
        <Stack.Screen name="FilmDetail"
          initialParams={{ itemId: 42, otherParam:0, viewTitle: "" }}
          options={({ route }) => ({ title: route.params.viewTitle })}  component={FilmDetail}  />
      </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          headerStyle: {
            backgroundColor: '#122004',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '400',
          },
          tabBarActiveTintColor: '#41B94D',
          tabBarInactiveTintColor: '#fff',
          tabBarShowLabel: false,
          tabBarStyle: { 
            backgroundColor: '#121212', 
            color: '#fff',
            borderStyle: null
          },
          tabBarIconStyle:{
            backgroundColor: '#121212', 
            color: '#fff',
          }
        })
      }
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Acceuil',
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name="music" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Play" component={HomeScreen} 
          options={{
            tabBarLabel: 'Play',
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Recherche" component={SearchStackNavigation} 
          options={{
            tabBarLabel: 'Recherche',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Profile" component={FavoritesStackNavigation} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#121212',
  },
  scrollview_container: {
    flex: 1
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
});