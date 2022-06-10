import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler/lib/commonjs/components/GestureComponents';
import { SafeAreaView } from 'react-native-safe-area-context';

const topic1 = [
    {
    title:'Mental Health',active: true
    }
];
const topic2 = [
    {
    title:'Emotional Health',active: true
    }
];
const topic3= [
    {
    title:'Physical Health',active:true
    }
];
const topic4= [
    {
    title:'Social Health',active:true
    }
];

const Checkin = ({navigation}) => {

    return (
        <View>
            <ScrollView>
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Text style={styles.CheckinTitle}>Let's begin your daily</Text>
                <Text style={styles.CheckinTitle}>check-in.</Text>
                <Text style={styles.topic}>What do you want to focus on today?</Text>
                <View style={styles.focusContainer}>
                    {topic1.map((item)=>{
                        return(
                        <TouchableOpacity style={[styles.topicItem,{backgroundColor:item.active?'#7497A7':'#C4C4C4'}]} onPress={() => navigation.navigate('MentalHealth',{
                            item: item,
                        })}>
                            <Text style={styles.focusTitle}>{item.title}</Text>
                        </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={styles.focusContainer}>
                    {topic2.map((item)=>{
                        return(
                        <TouchableOpacity style={[styles.topicItem,{backgroundColor:item.active?'#7497A7':'#C4C4C4'}]} onPress={() => navigation.navigate('EmotionalHealth',{
                            item: item,
                        })}>
                            <Text style={styles.focusTitle}>{item.title}</Text>
                        </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={styles.focusContainer}>
                    {topic3.map((item)=>{
                        return(
                        <TouchableOpacity style={[styles.topicItem,{backgroundColor:item.active?'#7497A7':'#C4C4C4'}]} onPress={() => navigation.navigate('PhysicalHealth',{
                            item: item,
                        })}>
                            <Text style={styles.focusTitle}>{item.title}</Text>
                        </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={styles.focusContainer}>
                    {topic4.map((item)=>{
                        return(
                        <TouchableOpacity style={[styles.topicItem,{backgroundColor:item.active?'#7497A7':'#C4C4C4'}]} onPress={() => navigation.navigate('SocialHealth',{
                            item: item,
                        })}>
                            <Text style={styles.focusTitle}>{item.title}</Text>
                        </TouchableOpacity>
                        );
                    })} 
                </View>
            </View>
        </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 300,

    },
    CheckinTitle: {
        fontWeight: '700',
        fontSize: 32,
        shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    },
    headingWrapper: {
        marginHorizontal: 20,
        marginTop: 60,
    },
    topic: {
        fontWeight: '500',
        fontSize: 24,
        color: '#C4C4C4',
        marginTop: 5,
        marginBottom: 20,
    },
    focusContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    topicItem: {
        borderRadius: 15,
        height: 50,
        marginTop: 40,

    },
    focusTitle: {
        fontSize: 24,
        marginLeft: 100,
        marginTop: 10,
        fontWeight: '500',
        color: '#F1F2ED',
    },
    image1: {
        marginTop: -185,
        width: 350,

    }
})

export default Checkin

