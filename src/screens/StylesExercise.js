import React from 'react'
import { View, StyleSheet } from 'react-native'

const StylesExercise = () => {
    return <View style = { styles.viewStyle }>
        <View style = { styles.viewOneStyle } />
        <View style = { styles.viewTwoStyle } />
        <View style = { styles.viewThreeStyle } />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        // default flexDirection: 'column'
        flexDirection: 'row',
        justifyContent: 'space-between'
        // alignItems always works based on the flexDirection config,
        // so we always should configure flexDirection first, for easier understanding of code
        // default alignItems: 'stretch'

        // justify content works in the other axis of alignItems
        // (which means if alignItems is working on the vertical axis, justifyContent will work on the horizontal axis, and vice versa)
        // default justify: 'stretch'
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        opacity: 0.2,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        opacity: 0.2,
        backgroundColor: 'green',
        top: 100
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        opacity: 0.2,
        backgroundColor: 'purple'
    }
})

export default StylesExercise