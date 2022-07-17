import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ColorsGradient = ({ color, onIncrease, onDecrease }) => {
    return <View>
        <Text>{ color }</Text>
        <TouchableOpacity
            onPress={ () =>
                onIncrease()
            }>
            <Text>More { color }</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={ () =>
                onDecrease()
            }>
            <Text>Less { color }</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({

})

export default ColorsGradient