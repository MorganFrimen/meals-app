import React, { useState } from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {enableScreens} from 'react-native-screens'

import MealsNavigation from './navigation/MealsNavigation';

enableScreens()

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans-medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />;
  }
  return <MealsNavigation />;
}
