import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/bummy-bata'
import Color from '../constants/Colors'

const CategoryMealScreen = (props) => {
  const renderMealsItem = itemData => {
    return(
      <View><Text> {itemData.item.title} </Text></View>
    ) 
  }

  const catId = props.navigation.getParam('categoryId')
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0 )


  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals}  keyExtractor={(item, index)=> item.id} renderItem = {renderMealsItem} />
    </View>
  );
};

CategoryMealScreen.navigationOptions =(navigationData)=>{
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
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
