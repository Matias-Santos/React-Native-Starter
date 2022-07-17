import React, { useReducer }  from 'react'
import { View, StyleSheet } from 'react-native'
import ColorsGradient from '../components/ColorsGradient'

const COLOR_INCREMENT = 10

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number }

    // by convention we will use:
    // action === {type: 'change_red' || 'change_green' || 'change_blue, payload: 10 || -10 }
    
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ?
            state :
            {...state, red: state.red + action.payload}
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ?
            state : 
            {...state, green: state.green + action.payload}
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
            state :
            {...state, blue: state.blue + action.payload}
        default:
            return state
    }
}

const ReducerSquareScreen = () => {
    // dispatch === runMyReducer
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    
    const {red, green, blue} = state

    const colors = ['Red','Green','Blue']

    return <View>
        <ColorsGradient color = { colors[0] } onIncrease = {() => { dispatch({ type: 'change_red', payload: COLOR_INCREMENT }) }} onDecrease = {() => { dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}} />
        <ColorsGradient color = { colors[1] } onIncrease = {() => { dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) }} onDecrease = {() => { dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}} />
        <ColorsGradient color = { colors[2] } onIncrease = {() => { dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) }} onDecrease = {() => { dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}} />
        <View style = {{ height:100, width:100, backgroundColor : `rgb(${red},${green},${blue})`}}/>
    </View>
}

const styles = StyleSheet.create({

})

export default ReducerSquareScreen
