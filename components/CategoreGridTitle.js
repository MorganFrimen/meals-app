import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const CategoryGrydTitle = props => {
    const [loaded] = useFonts({
        opensansbold: require('../assets/fonts/OpenSans-Bold.ttf'),
      });
      
      if (!loaded) {
        return null;
      }
    
    return(
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor:props.color}}} > 
          <Text style={styles.title} >{props.title}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 4,
        height: 150,
      },
    container: {
        flex: 1,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0 , height: 2 },
        elevation: 3,
        padding: 8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'opensansbold',
        fontSize: 18,
    }
})

export default CategoryGrydTitle