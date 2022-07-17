import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Ale'       , age: 26 },
        { name: 'Mati'      , age: 25 },
        { name: 'Gian'      , age: 24 },
        { name: 'Tito'      , age: 23 },
        { name: 'Coria'     , age: 24 },
        { name: 'Juampi'    , age: 23 },
        { name: 'Mica'      , age: 25 },
        { name: 'Tobi'      , age: 25 }
    ]

    return <FlatList
        keyExtractor = {( friend ) => friend.name }
        data = { friends }
        renderItem = {({ item }) => {
            return <Text style = { styles.textStyle }>{ item.name } - Age { item.age }</Text>
        }}>
    </FlatList>
}

const styles = StyleSheet.create ({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen