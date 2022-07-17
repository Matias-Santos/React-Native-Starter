import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native'

const ColorsScreen = ({ navigation }) => {
    const [colors, setColors] = useState([])
    return <View>
        <TouchableOpacity
            onPress={ () =>
                setColors([...colors,randomRGB()])
            }>
            <Text>Add a color</Text>
        </TouchableOpacity>
        <FlatList 
            keyExtractor = { (item) => item }
            data = { colors }
            renderItem = { ({item}) => {
                return <View style = {{height:100, width:100, backgroundColor: item }}></View>
            }}
        />
    </View>
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `rgb(${ red },${ green },${ blue })`
}

const styles = StyleSheet.create({
    buttons: {
        alignContent: 'center'
    }
})

export default ColorsScreen