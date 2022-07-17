import React, { useState }  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorsGradient from '../components/ColorsGradient'

const COLOR_INCREMENT = 10

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, amount) => {
        switch(color) {
            case 'red':
                red + amount > 255 || red + amount < 0 ? null : setRed(red + amount)
                return
            case 'green':
                green + amount > 255 || green + amount < 0 ? null : setGreen(green + amount)
                return
            case 'blue':
                blue + amount > 255 || blue + amount < 0 ? null : setBlue(blue + amount)
                return
            default:
                return
        }
    }

    const colors = ['Red','Green','Blue']

    return <View>
        <ColorsGradient color = { colors[0] } onIncrease = {() => { setColor('red', COLOR_INCREMENT)}} onDecrease = {() => { setColor('red', -1 * COLOR_INCREMENT )}} />
        <ColorsGradient color = { colors[1] } onIncrease = {() => { setColor( 'green', COLOR_INCREMENT)}} onDecrease = {() => { setColor('green', -1 * COLOR_INCREMENT )}} />
        <ColorsGradient color = { colors[2] } onIncrease = {() => { setColor( 'blue', COLOR_INCREMENT)}} onDecrease = {() => { setColor('blue', -1 * COLOR_INCREMENT )}} />
        <View style = {{ height:100, width:100, backgroundColor : `rgb(${red},${green},${blue})`}}/>
        <Text>Image Screen</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default SquareScreen
