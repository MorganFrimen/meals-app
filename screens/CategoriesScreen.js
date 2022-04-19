import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Color from '../constants/Colors'
import { CATEGORIES } from '../data/bummy-bata';
import CategoryGrydTitle from '../components/CategoreGridTitle';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGrydTitle 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={()=>  {
          props.navigation.navigate({ routeName: 'CategoryMeals', 
          params: {
            categoryId: itemData.item.id
        }});
      }} />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meals Categories',
  headerStyle: {
    backgroundColor: Color.prymaryColor
  },
  headerTintColor: '#fff',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default CategoriesScreen;
