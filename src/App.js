import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';

import Navigation  from './navigation';

import { Provider } from 'react-redux'
import Store from './Store/configureStore';

import Intro from './layouts/Intro';
import AppTheme from './theme';


export default function App() {
  const [intro, setIntro] = useState(true);

  return (
    <Provider store={Store}>
      <AppTheme>
          {intro ? <Intro setIntro={setIntro}/> : <Navigation/>}
      </AppTheme>
    </Provider>
      );
}