import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

// expo install expo-font
import { useFonts } from 'expo-font';

// expo install expo-linear-gradient
import { LinearGradient } from 'expo-linear-gradient';

// npm i react-native-elements
import { Icon } from 'react-native-elements';

import { Button, TextInput, Checkbox  } from 'react-native-paper';

export default function LoginScreen5({navigation}) {
  const [checked, setChecked] = React.useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient style={styles.container} colors={['#fff', '#eee']}>
        {/* Welcome Text */}
        <Text
          style={{
            color: '#333',
            fontSize: 35,
            fontFamily: 'QuicksandSemiBold',
            marginBottom: 18
          }}
        >
          Bienvenue(e) !
        </Text>
        {/* Enter your number Text */}
        <Text
          style={{
            color: '#333',
            fontSize: 18,
            marginTop: 14,
            fontFamily: 'QuicksandBold',
          }}
        >
          Connexion
        </Text>
        {/* Number Input */}
        <View style={styles.inputTopMorph}>
            <TextInput
              style={styles.input}
              mode='Outlined'
              label="Email"
            />
            <TextInput Outlined
              style={styles.input}
              mode='Outlined'
              type='password'
              label="Mot de passe"
            />
        </View>
        {/* Continue Button */}
          <View style={styles.buttonView}>
            <Button mode="outlined" style={styles.buttonText} 
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('App', {
                      otherParam: 'anything you want here',
                    });
                  }}>
              Se connecter
            </Button>
          </View>
        {/* New User or Forgot Password */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: '#666',
              fontSize: 14,
              fontFamily: 'QuicksandRegular',
            }}
          >
            S'incrire
          </Text>
          <Text
            style={{
              color: '#666',
              fontSize: 14,
              fontFamily: 'QuicksandRegular',
            }}
          >
            Mot de pass oublié ?
          </Text>
        </View>
        {/* Social Login */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 50,
          }}
        >
          <TouchableOpacity style={styles.iconTouchable}>
            <View style={styles.iconView}>
              <Icon name='google' type='font-awesome' color='#096C39' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconTouchable}>
            <View style={styles.iconView}>
              <Icon
                name='facebook-square'
                type='font-awesome'
                color='#096C39'
              />
            </View>
          </TouchableOpacity>
        </View>
        
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
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  inputTopMorph: {
    width: '100%',
    height: 150,
    marginTop: 20,
    borderRadius: 10,/* 
    elevation: 5,
    shadowOffset: {
      width: -12,
      height: -12,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#252525', */
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
    marginBottom: 20,
    width: '100%',
    height: 50,
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: 'QuicksandRegular',
    color: '#f1f3f6',
  },
  buttonView: {
    marginTop: 0,
    borderRadius: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#3f3f3f',
  },
  buttonText: {
    borderColor: '#ccc',
    borderWidth: 1,
    fontFamily: 'QuicksandBold',
    fontSize: 12,
    color: '#096C39',
    textAlign: 'center',
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