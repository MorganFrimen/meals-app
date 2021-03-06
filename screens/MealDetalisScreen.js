import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/bummy-bata';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const MealDetalScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetalScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favorite' iconName='ios-star' onPress={() => {
        console.log('mark')
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetalScreen;
