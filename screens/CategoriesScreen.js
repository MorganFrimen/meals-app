import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATRGORIES } from '../data/bummy-bata';

const renderGridItem = (itemData) => {
  return (
    <View style={styles.grid}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATRGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
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
