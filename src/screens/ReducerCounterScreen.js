import React, { useReducer } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native'

const COUNT_INCREMENT = 1

const reducer = ( state, action ) => {
    switch (action.type) {
        case 'addition':
            return {...state, count: state.count +  action.payload}
        case 'substraction':
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}

const ReducerCounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const count = state.count

    return <View>
        <TouchableOpacity
            onPress = { () => {
                    dispatch({ type: 'addition', payload: COUNT_INCREMENT })
                }
            }>
            <Text>Increase Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress = { () => {
                    dispatch({ type: 'substraction', payload: COUNT_INCREMENT })
                }
            }>
            <Text>Decrease Counter</Text>
        </TouchableOpacity>
        <Text>{ count }</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default ReducerCounterScreen