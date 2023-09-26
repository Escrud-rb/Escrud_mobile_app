
import React, {useState} from 'react';
import { StyleSheet, Button, Text, View, FlatList, ActivityIndicator  } from 'react-native';

import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

import SearchBar from '../components/SearchBar';
import { Searchbar } from 'react-native-paper';
import FilmList from '../components/FilmList';

import {getFimlsFromApiWithSearchedText} from '../API/TMBDApi';
import {BottomNav} from '../components/BottomNav';

let page = 0;
let total_pages = 0;
export default function App({route, navigation}) {
  const [state, setstate] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const _loadFilms =() => {
    console.log(page)
    if (searchText.length > 0){
      getFimlsFromApiWithSearchedText(searchText, page+1).then(data => {
        page = data.page;
        total_pages = data.total_pages;/* 
        setstate(data.results);  */
        setstate([ ...state, ...data.results ])
      });
    }
  }

  const _searchFilms =() => {
    page = 0;
    total_pages = 0;
    setLoading(true);
    getFimlsFromApiWithSearchedText(searchText, page+1).then(data => {
      page = data.page;
      total_pages = data.total_pages;
      setstate(data.results); 
      setLoading(false);
    });
  }

  const handleSearchTextChange = (text) => {
    setSearchText(text)
  }

  const displayDetailForFilm = (id, title) => {
    console.log(id)
    navigation.navigate('FilmDetail', {
      filmId: id,
      viewTitle: title
    });
  }

  return (
    <View style={styles.main_container}>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  );
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Loader =()=>{
  return (
    <View style={styles.loader}>
    <ActivityIndicator size="large" color="#fff" />
      <Text style={styles.text}>Chargement</Text>
    </View>)
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
