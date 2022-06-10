import React from 'react';
import * as RN from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { db } from '../firebase';
import AddPhysicalHealth from './AddPhysicalHealth';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import AddEmotionalHealth from './AddEmotionalHealth';
import { useNavigation } from '@react-navigation/native';
import EditMentalHealth from './EditMentalHealth';
import AddMentalHealth from '../screens/AddMentalHealth';


MaterialCommunityIcons.loadFont();

const PhysicalHealth = ({navigation}) => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const collectionRef = collection(db, 'PhysicalHealth');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log('querySnapshot unsusbscribe');
          setProducts(
            querySnapshot.docs.map(doc => ({
                id: doc.id,
                emoji: doc.data().emoji,
                note: doc.data().note,
                date: doc.data().date,
                isMood: doc.data().isMood,
                createdAt: doc.data().createdAt,
            }))
          );
        });
    return unsubscribe;
    },[])

    React.useEffect(() => {
        const collectionRef = collection(db, 'PhysicalHealth1');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log('querySnapshot unsusbscribe');
          setProducts(
            querySnapshot.docs.map(doc => ({
                id: doc.id,
                emoji1: doc.data().emoji1,
                note1: doc.data().note1,
                date1: doc.data().date1,
                isMood1: doc.data().isMood1,
                createdAt: doc.data().createdAt,
            }))
          );
        });
    return unsubscribe;
    },[])

    React.useEffect(() => {
        const collectionRef = collection(db, 'PhysicalHealth2');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log('querySnapshot unsusbscribe');
          setProducts(
            querySnapshot.docs.map(doc => ({
                id: doc.id,
                emoji2: doc.data().emoji2,
                note2: doc.data().note2,
                date2: doc.data().date2,
                isMood2: doc.data().isMood2,
                createdAt: doc.data().createdAt,
            }))
          );
        });
    return unsubscribe;
    },[])


    return (
        <ScrollView style={styles.container}>
        <View>
            <Text style={styles.title}>Mood History for</Text>
            <Text style={styles.title1}>Physical Health</Text>
            {products.map(product => <EditMentalHealth key={product.id} {...product} />)}
            <TouchableOpacity onPress={() => navigation.navigate(AddPhysicalHealth)} style={styles.button}>
                <Text style={{color: 'white', fontSize: 20,}}>Add Mood</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 50,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title1: {
        fontSize: 34,
        fontWeight: 'bold',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        color: '#7497A7',
    },
    button: {
        marginTop: 100,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7497A7',
        height: 46,
        borderRadius: 11,
    }
});


export default PhysicalHealth