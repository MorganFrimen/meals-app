import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealsHeader }}>
            <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>
                {' '}
                {props.title}{' '}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 300,
    width: '100%',
    backgroundColor: '#498bff',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealsHeader: {
    height: '89%',
  },
  mealDetail: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'opensansbold',
    fontSize: 16,
    color: '#FFF',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 4,
    paddingVertical: 16,
    textAlign: 'center',
  },
});

export default MealItem;
