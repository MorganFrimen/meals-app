import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MealDetalScreen = props => {
    return(
        <View>
            <Text style={styles.screen}>
                The Meal Detal Screen !!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MealDetalScreen