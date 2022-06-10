import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';


export default OnboardingItem = ({navigation}) => {
    const slides = [
        {
            id: 1,
            title: 'Goal Setting & Tracking',
            description: 'Become more mindful by accomplishing goals to become successful.',
            image: require('../assets/images/FindResources.png')
        },
        {
            id: 2,
            title: 'Mood Tracking',
            description: 'Take charge in your mood to improve your well-being.',
            image: require('../assets/images/FindResources.png')
        },
        {
            id: 3,
            title: 'Recommendations',
            description: 'Get recommendations on how to develop a sense of connection within yourself.',
            image: require('../assets/images/FindResources.png')
        },
    ]
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>

            <Text>blah</Text>

        </View>
    )
}

const styles = StyleSheet.create({
})