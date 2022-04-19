import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import {CATRGORIES} from '../data/bummy-bata'
import Color from '../constants/Colors'

const CategoryMealScreen = (props) => {

  const catId = props.navigation.getParam('categoryId')
  const selectedCategory = CATRGORIES.find(cat => cat.id === catId)
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen !!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Details"
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealsDetals' });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions =(navigationData)=>{
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATRGORIES.find(cat => cat.id === catId)
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Color.prymaryColor
    },
    headerTintColor: '#fff',
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
