
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Button, Text, View, FlatList, ActivityIndicator  } from 'react-native';
import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import FilmList from '../components/FilmList';

import {getFimlsFromApiWithSearchedText} from '../API/TMBDApi';

let page = 0;
let total_pages = 0;
function Favorites({favoritesFilm, navigation}) {
  const [loading, setLoading] = useState(false);

  const _loadFilms =() => {
    console.log(page)
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
      <AnimatedLinearGradient
        colors={["#ff457c","#b65934"]}
        style={styles.container}>
        {loading ? <Loader/> : 
          favoritesFilm == [] 
            ? <Text style={styles.text}>Aucun film ajouté au favori </Text>
            : <FilmList data={favoritesFilm}
                onEndReached={()=> {
                  console.log('endreached fkggdf ------------')
                  if (page < total_pages) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                    _loadFilms()
                  }
                }
              }
              displayDetailForFilm={displayDetailForFilm} /> 
        }
      </AnimatedLinearGradient>
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



const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)