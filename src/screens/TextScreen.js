import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('')
    return <View>
        <Text>Enter password:</Text>
        <TextInput
            style = { styles.inputStyle }
            autoCapitalize = "none"
            autoCorrect = { false }
            value = { password }
            onChangeText = { (newName) => setPassword(newName)}
        />
        { password.length <= 5 ?  <Text>Password must be longer than 5 characters </Text> : null }
    </View>
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 40,
        marginHorizontal: 100,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default TextScreen