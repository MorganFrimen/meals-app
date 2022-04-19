import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Color from '../constants/Colors'
import { CATRGORIES } from '../data/bummy-bata';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.grid}
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals', params: {
            categoryId: itemData.item.id
          } });
        }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATRGORIES}
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
  grid: {
    flex: 1,
    margin: 16,
    height: 150,
  },
});

export default CategoriesScreen;
