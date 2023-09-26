
import React, {useState, useEffect} from 'react';
import { AppearanceProvider, Appearance } from "react-native-appearance";
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// expo install expo-font
import { useFonts } from 'expo-font';

/* 
import fontConfig from './configureFonts'; */

const theme = {
  ...DefaultTheme,
  roundness: 14,/* 
  fonts: configureFonts(fontConfig), */
  colors: {
    ...DefaultTheme.colors,
    primary: '#008C9C',
    secondary: '#41B94D',
    accent: '#41B94D',/* 
    background: '#333' */
  },
};

export default function AppTheme({children}) {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <AppearanceProvider>
        {children}
      </AppearanceProvider>
    </PaperProvider>
  );
}