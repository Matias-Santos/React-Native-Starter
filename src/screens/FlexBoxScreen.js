import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const FlexBoxScreen = () => {
    return <View style = { styles.viewStyle }>
        <Text style = { styles.textOneStyle }>Child #1</Text>
        <Text style = { styles.textTwoStyle }>Child #2</Text>
        <Text style = { styles.textThreeStyle }>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // default flexDirection: 'column'
        // flexDirection: 'row',
        
        // alignItems always works based on the flexDirection config,
        // so we always should configure flexDirection first, for easier understanding of code
        // default alignItems: 'stretch'
        alignItems: 'center',

        // justify content works in the other axis of alignItems
        // (which means if alignItems is working on the vertical axis, justifyContent will work on the horizontal axis, and vice versa)
        // default justify: 'stretch'
        justifyContent: 'center'
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 200,
        // marginVertical: 20,
        // marginHorizontal: 10,
        // padding: 5,
        color: 'blue',
        
        // flex makes this item take as much space as available, takin into account the flex of the other items,
        // on the flexDirection axis (default flexDirection: 'column')
        // in this example we got 4 + 4 + 2 = 10, so the space available is divided by 10, and distributed accordingly to the items
        // flex: 4,
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 200,
        color: 'blue',
        // flex: 4

        // alignSelf overrides the alignItems property present on the parent object,
        // by using this property we can generalize an alignment for all the childs on the parent,
        // and especifically align certain children with the desired configuration
        alignSelf: 'flex-start'
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 200,
        color: 'blue',
        // flex: 2
    }
})

export default FlexBoxScreen