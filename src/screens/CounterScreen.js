import React, { useState } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native'

const CounterScreen = ({ navigation }) => {
    const [counter,setCounter] = useState(0)
    return <View>
        <TouchableOpacity
            onPress={ () =>
                setCounter(counter + 1)
            }>
            <Text>Increase Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={ () =>
                setCounter(counter - 1)
            }>
            <Text>Decrease Counter</Text>
        </TouchableOpacity>
        <Text>{ counter }</Text>
    </View>
}

const styles = StyleSheet.create({
    buttons: {
        alignContent: 'center'
    }
})

export default CounterScreen