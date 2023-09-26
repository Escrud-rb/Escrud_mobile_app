import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native';

// expo install expo-font
import { useFonts } from 'expo-font';

// expo install expo-linear-gradient
import { LinearGradient } from 'expo-linear-gradient';

// npm i react-native-elements
import { Icon } from 'react-native-elements';

import { Button, TextInput, Checkbox, Card } from 'react-native-paper';

export default function LoginScreen5({navigation}) {
  const [checked, setChecked] = React.useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient style={styles.container} colors={['#fff', '#eee']}>
        
      <Text
          style={{
            color: '#333',
            position: 'absolute',
            zIndex: 1000,
            fontSize: 24,
            top: 80,
            fontFamily: 'QuicksandBold',
          }}
        >
          Inscription
        </Text>
          <Image
            style={{ height: 120, resizeMode: 'contain', marginTop: 60, marginBottom: -60 }}
            source={require('../../assets/icon.png')}
          />
        <Card style={styles.card}>
        {/* Number Input */}
        <View>
            <TextInput
              style={styles.input}
              mode='outlined'
              label="Nom complet"
            />
            <TextInput Outlined
              style={styles.input}
              mode='outlined'
              type='email'
              label="Email"
            />
            <TextInput Outlined
              style={styles.input}
              mode='outlined'
              type='password'
              label="Mot de passe"
            />
            <TextInput Outlined
              style={styles.input}
              mode='outlined'
              type='password'
              label="Comfirmez le mot de passe"
            />
        </View>
        {/* Continue Button */}
          <View style={styles.buttonView}>
            <Button mode='contained' style={[styles.buttonText, {backgroundColor: '#059E25'}]} 
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('App');
                  }}>
               S'inscrire
            </Button>
            <Button mode="contained-tonal" style={styles.buttonText} labelStyle={{textTransform: 'none'}}
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Login');
                  }}>
              Se connecter
            </Button>
          </View>

          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20
          }}
        >
        </View>
        </Card>
        <View style={styles.conditions}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text
            style={{
              color: '#666',
              fontSize: 13,
            }}
          >
            J'ai lu et j'accepte les conditions d'utilisations de cette application.
          </Text>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  card:{
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  inputBottomMorph: {
    borderRadius: 10,/* 
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#414141', */
  },
  input: {
    marginBottom: 10,
    width: '100%',
    height: 45,
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: 'QuicksandRegular',
    color: '#f1f3f6',
  },
  buttonText: {
    color: '#096C39',
    marginTop: 10,
  },
  iconTouchable: {
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#e4e7e4'
  },
  iconView: {
    borderRadius: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#3f3f3f',
    padding: 10,
  },
  conditions:{
    marginTop: 50,
    marginBottom: -80,
    height: 100
  }
});