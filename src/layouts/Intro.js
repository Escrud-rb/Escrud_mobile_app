import React from 'react';
import Ion from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Headline } from 'react-native-paper';
import { Button } from 'react-native-paper';
import Svgimg1 from '../../assets/intro/undraw_metrics_re_6g90.svg';
import Svgimg2 from '../../assets/intro/undraw_drone_delivery_re_in95.svg';
import Svgimg3 from '../../assets/intro/undraw_all_the_data_re_hh4w.svg';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    height: '100%', width: '100%', 
    justifyContent: 'center',
    alignItems: 'center', backgroundColor: '#008C9C'
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 80,
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    tintColor: '#aaa',
  },
  title: {
    fontFamily: 'QuicksandRegular',
    marginTop: 20,
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    paddingBottom: 10,
    color: '#eee',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#eee',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'QuicksandRegular',
  },
  button: {
    fontSize: 18,/* 
    borderColor: "#E1C97D", */
    marginTop: 30,
  }
});
 
const slides = [
  {
    key: 1,
    title: 'ESRUD APP',
    text: 'Une petite description de l\'appli ici',
    image: (<Svgimg1 height={230} />),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Une petite description des fonctionnalités',
    image: (<Svgimg2 height={230} />),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Title 3',
    text: 'Une petite explication de l\'appli ici',
    image: (<Svgimg3 height={230} />),
    backgroundColor: '#22bcb5',
  }
];
 
export default function App({setIntro}) {
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.image}>
          {item.image}
        </View>
        <Headline style={styles.title}>{item.title}</Headline>
        <Text style={styles.text}>{item.text}</Text>
        <Button mode="contained-tonal" style={styles.button} labelStyle={{color: '#FFFFFF'}} onPress={() => setIntro(false)}>
          Se connecter
        </Button>
      </View>
    );
  }
  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="navigate-next"
          color="rgba(255, 255, 155, .9)"
          size={24}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const _onDone = () => {
    setIntro(false);
  };
  
    return (
      <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        onDone={_onDone}
        dotStyle={{backgroundColor: 'rgba(0, 0, 0, .2)'}}
      />
    );
}