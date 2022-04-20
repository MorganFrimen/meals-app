import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/bummy-bata';
import Color from '../constants/Colors';
import MealItem from '../components/MealsItem';

const CategoryMealScreen = (props) => {
  const renderMealsItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imgeUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealsDetail',
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealsItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Color.prymaryColor,
    },
    headerTintColor: '#fff',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
