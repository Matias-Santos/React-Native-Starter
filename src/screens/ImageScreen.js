import React from 'react'
import {View, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const images = [
        {
            image: '../../assets/forest.jpg',
            title: "Forest"
        }, {
            image: '../../assets/beach.jpg',
            title: "Beach"
        }, {
            image: '../../assets/mountain.jpg',
            title: "Mountain"
        }
    ]

    return <View>
        <ImageDetail title = { images[0].title} imageSource = { require('../../assets/beach.jpg')} score = {2} />
        <ImageDetail title = { images[1].title} imageSource = { require('../../assets/forest.jpg')} score = {4} />
        <ImageDetail title = { images[2].title} imageSource = { require('../../assets/mountain.jpg')} score = {7} />
    </View>
}

const styles = StyleSheet.create({
    
})

export default ImageScreen
