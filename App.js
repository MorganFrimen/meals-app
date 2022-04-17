import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

import MealsNavigation from './navigation/MealsNavigation';
import CategoriesScreen from './screens/CategoriesScreen';
import { View } from 'react-native';

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans-medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)}
/>
  }

  return (
      <MealsNavigation style={styles.container}/>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});