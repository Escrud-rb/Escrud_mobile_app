// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeScreen({route, navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#121212' }}>
      <Text>Bienvenu(e) !</Text>

      <Button
        title="Trouvez un film"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Search', {
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  );
}