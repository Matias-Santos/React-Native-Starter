import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PositionScreen = () => {
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
        alignItems: 'stretch',

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

        // 
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
        // alignSelf: 'flex-start',

        // the position property will make this object completely ignore the rest of the environment items,
        // by doing so, this could end up overlapping certain elements, so we got to be careful with this prop
        position: 'absolute'
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 200,
        color: 'blue',
        // flex: 2
        
        // top, bottom, left and right properties, are similar to the constraints used in Swift,
        // after all the styling is applied to the items, these properties act like constraints,
        // by moving the afected component to the desired location
        top: 10,
        // bottom: 10,
        left: 10
        // right: 10

        /*
        position: 'absolute',   +
        top: 0,                 +
        bottom: 0,              +
        left: 0,                +
        right: 0,               +
        
        is equivalent as setting this property -> ...StyleSheet.absoluteFillObject
        */
    }
})

export default PositionScreen