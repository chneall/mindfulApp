import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import OnboardingItem from './OnboardingItem';

export default OnboardingCarousel = ()=> {
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
    return (
        <View style={styles.container}>

            <FlatList data={slides} renderItem={({ item }) => <OnboardingItem item={item} />} />

        </View>
    )
}

const styles = StyleSheet.create({
})
