import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native'

const HomeScreen = ({ navigation }) => {
    return <View>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("ComponentsScreen")
        }>
            <Text>Go to Components Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("ListScreen")
        }>
            <Text>Go to List Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("ImageScreen")
        }>
            <Text>Go to Image Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("CounterScreen")
        }>
            <Text>Go to Counter State Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("ColorsScreen")
        }>
            <Text>Go to Color State Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("SquareScreen")
        }>
            <Text>Go to Square Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("ReducerSquareScreen")
        }>
            <Text>Go to Reducer Square Demo</Text>
        </TouchableOpacity> 
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("ReducerCounterScreen")
        }>
            <Text>Go to Reducer Counter Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("TextScreen")
        }>
            <Text>Go to Reducer Text State Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("BoxScreen")
        }>
            <Text>Go to Box Object Model Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("FlexBoxScreen")
        }>
            <Text>Go to Flex Box Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("PositionScreen")
        }>
            <Text>Go to Position Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.buttonStyle } onPress={ () =>
            navigation.navigate("StylesExercise")
        }>
            <Text>Go to Styles Exercise Demo</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    buttonStyle: {
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'lightblue'
    }
})

export default HomeScreen;
