import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';

import { Surface, Card } from 'react-native-paper';

import moment from 'moment';
import numeral from 'numeral';
import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import MontserratRegular from '../../assets/fonts/Comfortaa/Comfortaa-Regular.ttf';
import MontserratBold from '../../assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf';
import MontserratExtraBold from '../../assets/fonts/Comfortaa/Comfortaa-Bold.ttf';

import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

import {getFilmDetailFromApi, getImageFromApi } from '../API/TMBDApi';

const Rating = ({ rating, maxRating }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {Array(rating)
        .fill(1)
        .map((el, i) => (
          <FAIcon key={i} name='star' size={20} color='#2e2e2e' />
        ))}
      {Array(maxRating - rating)
        .fill(1)
        .map((el, i) => (
          <FAIcon key={i} name='star-o' size={20} color='#2e2e2e' />
        ))}
    </View>
  );
};
function FilmDetail({ route, navigation, ...props }) {
  const [loaded] = useFonts({
    MontserratRegular,
    MontserratBold,
    MontserratExtraBold,
  });
  const { filmId, otherParam } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [film, setFilm] = useState(null);

  const [isFavourite, setFavourite] = useState(false);
  const [size] = useState([
    { id: 1, label: 'S' },
    { id: 2, label: 'M' },
    { id: 3, label: 'L' },
    { id: 4, label: 'XL' },
  ]);

  const [selectedSize, setSelectedSize] = useState('M');

  const [seeFullDescription, setSeeFullDescription] = useState(false);


  useEffect(() => {
    getFilmDetailFromApi(filmId).then(data => {
      setFilm(data);
      setLoading(false)
    })
  }, []);

  const [moreProducts] = useState([
    {
      productName: 'Black Printed Tshirt',
      productPrice: 19.49,
      productImage:
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Black Printed Top (Women)',
      productPrice: 19.49,
      productImage:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=90',
    },
    {
      productName: 'White Solid Tshirt',
      productPrice: 34.99,
      productImage:
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Black Solid Tshirt',
      productPrice: 34.99,
      productImage:
        'https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
    {
      productName: 'Red Top (Women)',
      productPrice: 44.85,
      productImage:
        'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    },
  ]);

  const toggleFavorite = () => {
    const action = {type:'TOGGLE_FAVORITE', value: film }
    props.dispatch(action)
  }
  
  const displayFilm = () => {
    if (film != null) {
      return (
<View style={{ flex: 1 }}>
  {/*         <ScrollView style={styles.scrollview_container}>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('FilmDetail', {
              filmId: Math.floor(Math.random() * 100),
              otherParam: Math.floor(Math.random() * 10)
            })
          }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Search')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />

<Image
  style={styles.image}
  source={{uri: getImageFromApi(film.backdrop_path)}}
/>
<Text style={styles.title_text}>{film.title}</Text>
<Text style={styles.description_text}>{film.overview}</Text>
<Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
<Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
<Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
<Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
<Text style={styles.default_text}>Genre(s) : {film.genres.map(function(genre){
    return genre.name;
  }).join(" / ")}
</Text>
<Text style={styles.default_text}>Companie(s) : {film.production_companies.map(function(company){
    return company.name;
  }).join(" / ")}
</Text>
</ScrollView>
 */}
      <ScrollView showsVerticalScrollIndicator={false}>
<AnimatedLinearGradient
   colors={["#ff457c","#b65934"]}
   style={styles.container}>
        <View>
          <Image
            style={{ height: 500, resizeMode: 'cover' }}
            source={{uri: getImageFromApi(film.backdrop_path)}}
          />
          <Image
            style={styles.posterPath}
            source={{uri: getImageFromApi(film.poster_path)}}
          />
        </View>
        <Surface style={styles.detailsView}>
          <View style={styles.productTitleView}>
            <Text style={styles.productTitle}>{film.title}</Text>
            <TouchableOpacity style={{ textAlign: 'right', paddingTop: 3}} onPress={() => toggleFavorite()}>
              <FAIcon name={props.favoritesFilm.findIndex(item => item.id === film.id) !== -1  ? 'heart' : 'heart-o'} size={28} color='#fff' />
            </TouchableOpacity>
          </View>
          <View style={styles.productPriceView}>
            <Text style={styles.discountedPriceText}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Rating rating={Math.floor(film.vote_average/2)} maxRating={5} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'MontserratBold',
                marginBottom: 10,
                color: '#ffffff',
              }}
            >
              Size:
            </Text>
            <View style={{ flexDirection: 'row' }}>
              {size.map((s) => (
                <TouchableOpacity
                  key={s.id}
                  style={
                    selectedSize === s.label ? styles.tagSelected : styles.tag
                  }
                  onPress={() => setSelectedSize(s.label)}
                >
                  <Text
                    style={
                      selectedSize === s.label
                        ? styles.tagLabelSelected
                        : styles.tagLabel
                    }
                  >
                    {s.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Surface>
        
        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={[styles.buttonText, { color: '#111' }]}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
          <TouchableOpacity
            style={styles.productDescriptionHeader}
            onPress={() => setSeeFullDescription((prev) => !prev)}
          >
            <Text style={{ fontFamily: 'MontserratBold', fontSize: 18 }}>
              Description
            </Text>
            <TouchableOpacity
              onPress={() => setSeeFullDescription((prev) => !prev)}
            >
              {seeFullDescription ? (
                <Icon name='chevron-up' size={26} />
              ) : (
                <Icon name='chevron-down' size={26} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: 'MontserratRegular' }}>
              {seeFullDescription
                ? `${film.overview}`
                : `${film.overview.split('. ')[0]} ...`}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              paddingTop: 30,
              fontFamily: 'MontserratBold',
              fontSize: 20,
              marginHorizontal: 10,
              color: 'white'
            }}
          >
            More Products
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
              {moreProducts.map((item, index) => (
                <View key={index} style={{ width: 180, marginHorizontal: 10 }}>
                  <View style={styles.moreProductImageView}>
                    <Image
                      style={{ flex: 1 }}
                      source={{
                        uri: item.productImage,
                      }}
                    />
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <Text style={styles.moreProductName}>
                      {item.productName}
                    </Text>
                    <View style={styles.moreProductPriceView}>
                      <Text style={styles.moreProductPrice}>
                        ${item.productPrice}
                      </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Icon
                          style={styles.moreProductIcon}
                          name='heart'
                          size={18}
                        />
                        <Icon
                          style={styles.moreProductIcon}
                          name='shopping-bag'
                          size={18}
                        />
                        <Icon
                          style={styles.moreProductIcon}
                          name='share'
                          size={18}
                        />
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.moreProductBuyButton}>
                    <Text style={styles.moreProductBuyButtonText}>Buy</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 40 }}></View>
        </AnimatedLinearGradient>
      </ScrollView>
    </View>
      )
    }
  }

  console.log(props.favoritesFilm)

  if (!loaded || isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size='large' color="#fff" />
      </View>
    );
  }
  return (
      <View style={{ flex: 1 }}>
        {displayFilm()}
      </View>
    );
  }

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
  
const styles = StyleSheet.create({
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center'
  },
  posterPath:{
    height: 250, 
    width: 160, 
    position: 'absolute', 
    left: 12, bottom: 100, 
    borderRadius: 12, resizeMode: 'cover', backgroundColor: "#aa457c",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'MontserratBold',
  },
  detailsView: {
    marginTop: -60,
    margin: 10,
    borderRadius: 18,
    backgroundColor: '#ff457c',
    paddingHorizontal: 18,
    paddingVertical: 18,
    elevation: 20,
    shadowColor: '#52006A',
  },
  container:{
  },
  productTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  productTitle: {
    flex: 1,
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'MontserratExtraBold',
  },
  productPriceView: {
    fontSize: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPriceText: { 
    color: '#ffffff',fontFamily: 'MontserratRegular', fontSize: 14 },
  actualPriceText: {
    color: '#ffffff',
    color: '#222',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    fontSize: 12,
    fontFamily: 'MontserratRegular',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#111',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'MontserratBold',
  },
  tag: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    fontFamily: 'MontserratBold',
    color: '#333',
  },
  tagSelected: {
    backgroundColor: '#333',
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    fontFamily: 'MontserratBold',
    color: '#FFF',
  },
  productDescriptionHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4fe',
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
  },
  moreProductName: {
    color: '#FFF',
    fontFamily: 'MontserratBold',
    fontSize: 16,
  },
  moreProductPriceView: {
    color: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  moreProductPrice: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'MontserratRegular',
  },
  moreProductIcon: {
    color: '#FFF',
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: '#111',
    marginTop: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreProductBuyButtonText: {
    color: '#fff',
    fontFamily: 'MontserratBold',
    fontSize: 18,
  },
});
/* 
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
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
}) */


const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmDetail)