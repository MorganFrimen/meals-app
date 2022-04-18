import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen !!</Text>
      <Button
        title="Details"
        onPress={() => {
          props.navigation.navigate({ routeName: 'Подробнее' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
