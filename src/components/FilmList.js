
import React, {useState} from 'react';
import { StyleSheet, Button, Text, View, FlatList  } from 'react-native';

import FilmItem from '../components/FilmItem';


let page = 0;
let total_pages = 0;
export default function FilmList({data, onEndReached, ...rest}) {
  return (
    <View style={styles.main_container}>
      <FlatList
     data={data}
     onEndReachedThreshold={1}
     onEndReached={onEndReached}
     keyExtractor={(item)=> page + item.id.toString()}
     renderItem={({item}) => <FilmItem {...rest} film={item}/>}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
  },
  container: {
    paddingTop: 0,
    flex: 1,
    padding: 7,
    paddingBottom:0
  },
  input:{
    color: '#fff',
    width: '90%',
    fontSize: 16,
    margin: 5,
    padding: 5,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius:12
  },
  button:{
    color: '#fff',
    width: '90%',
    fontSize: 16,
    padding: 5,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius:12
  },
  text:{
    color: '#ffffff99',
    textAlign: 'left',
    fontSize: 14,
  },
  loader:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
