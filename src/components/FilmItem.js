import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';
import { getImageFromApi } from '../API/TMBDApi';

function FilmItem({film, displayDetailForFilm, ...props}) {
  const toggleFavorite = () => {
    const action = {type:'TOGGLE_FAVORITE', value: film }
    props.dispatch(action)
  }
  return (
    <TouchableOpacity onPress={() => displayDetailForFilm(film.id, film.title)} style={styles.container}>
        <Image style={styles.image} source={{uri: getImageFromApi(film.poster_path)}}/>
        <View  style={styles.content}>
            <View style={styles.contentHeader}>
                <Text style={styles.text}>{film.title}</Text>
                <Text style={styles.text}>{film.vote_average}</Text>
                
                <TouchableOpacity style={{ textAlign: 'right', paddingTop: 3}} onPress={toggleFavorite}>
                  <FAIcon name={props.favoritesFilm.findIndex(item => item.id === film.id) !== -1  ? 'heart' : 'heart-o'} size={21} color='#fff' />
                </TouchableOpacity>
            </View>
            <Text style={styles.contentBody} numberOfLines={4}>{film.overview}</Text>
            <Text style={styles.contentFooter}>{film.release_date}</Text>
        </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
      height: 100,
      flex:1,
      flexDirection: 'row',
      backgroundColor: '#00000022',
      marginTop:5,
      borderRadius:10,
      padding: 4
  },
  image:{
      width:100,
      backgroundColor: '#00000020',
      borderRadius:8
  },
  content:{
      flex:1,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom:0
  },
  contentHeader:{
      height: 30,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  contentBody:{
      flex:1,
      fontSize:12,
      color: '#dddddd'
  },
  contentFooter:{
      flexBasis:15,
    color: '#000',
    fontSize: 10,
    justifyContent: 'flex-end',
    textAlign: 'right',/* 
    borderWidth:1,
    borderColor: 'black' */
  },
  text:{
      color: '#ffffff',
      fontSize:14,
      padding: 0,
      margin: 0
  }
});


const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmItem)