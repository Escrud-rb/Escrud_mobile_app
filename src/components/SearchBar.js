import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function SearchBar({loadFimls, setSearchText}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Titre du film' onChangeText={(text)=>setSearchText(text)} onSubmitEditing={loadFimls}/>
      <Button style={styles.button} title='Rechercher' onPress={loadFimls}/>  
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginBottom: 10
  },
  input:{
    color: '#fff',
    width: '100%',
    fontSize: 16,
    padding: 5,
    borderColor: '#ffffff76',
    borderWidth: 1,
    paddingLeft:10,
    borderRadius:4
  },
  button:{
    width: '90%',
  },
  text:{
    color: '#fff',
    height: 100,
    width: '100%',
    fontSize: 22,
  }
});
