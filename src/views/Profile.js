import React from 'react';
import Ion from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-paper';
 
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    height: '100%', width: '100%', 
    justifyContent: 'center',
    alignItems: 'center', backgroundColor: '#096C39'
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 25,
    color: 'white',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 60,
    tintColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333', //appStyles.colorSet[colorScheme].mainThemeForegroundColor,
  },
  button: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  }
});
 
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/intro/undraw_audio_player_re_cl20.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/intro/undraw_audio_player_re_cl20.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/intro/undraw_audio_player_re_cl20.png'),
    backgroundColor: '#22bcb5',
  }
];
 
export default function App({setIntro}) {
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
        <Button mode="outlined" style={styles.button} onPress={() => console.log('Pressed')}>
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