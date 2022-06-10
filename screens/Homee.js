import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, StatusBar, ScrollView } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';
import { hideComplitedReducer, setTodosReducer } from '../redux/todosSlice';
import ListTodos from '../components/ListToDos';
import { useGetTodos } from '../hooks/useGetTodos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native';
import * as Device from 'expo-device';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
})

export default function Homee() {

    useGetTodos();
    const todos = useSelector(state => state.todos.todos);
    const [isHidden, setIsHidden] = useState(false);
    const dispatch = useDispatch();
    const [expoPushToken, setExpoPushToken] = useState('');
    const navigation = useNavigation();


    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
        checkFirstLaunch();
    }, []);

    const checkFirstLaunch = async () => {
        const firstLaunch = await AsyncStorage.getItem('@FirstLaunch');
        if (firstLaunch) {
            return;
        }
        await AsyncStorage.setItem('@FirstLaunch', 'true');
        navigation.navigate('Home');
    }

    const handleHideCompleted = async () => {
        if (isHidden) {
            setIsHidden(false);
            const todos = await AsyncStorage.getItem('Todos');
            if(todos !== null){
                dispatch(setTodosReducer(JSON.parse(todos)));
            }
            // setLocalData(todosData.sort((a, b) => {
            //     return a.isCompleted - b.isCompleted;
            // }));
            return;
        }
        setIsHidden(!isHidden);
        dispatch(hideComplitedReducer());
        // setLocalData(localData.filter(item => item.isCompleted === false));
    }

    const registerForPushNotificationsAsync = async () => {
        let token;
        if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
        } else {
            return;
        }
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
        return token;
    }

    const todayTodos = todos.filter(todo => moment(todo.hour).isSame(moment(), 'day'));
    const tomorrowTodos = todos.filter(todo => moment(todo.hour).isAfter(moment(), 'day')); 

    return (
        todos.length > 0 ?
        <View style={styles.container}>
            <Text style={styles.title1}>Let's focus on what's important.</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={styles.title}>Today's Goals</Text>
                <TouchableOpacity onPress={handleHideCompleted}>
                    <Text style={{color:'#3478F6'}}>{isHidden ? "Finished Goals" : "Hide Goals"}</Text>
                </TouchableOpacity>
            </View>
            { todayTodos.length > 0  
              ? <ListTodos todosData={todayTodos} />
              : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                  <Image
                    source={require('../assets/images/sitting-8.png')}
                    style={{width: 200, height: 200, marginBottom: 20, resizeMode: 'contain'}}
                  />
                  <Text style={{fontSize: 13, color: '#000', fontWeight: 'bold'}}>Being mindful can improve overall mental health. </Text>
                  <Text style={{fontSize: 13, color: '#737373', fontWeight: '500'}}>Click the "plus" button to add a goal to accomplish today!</Text>
                  <View>
                  <TouchableOpacity onPress={() => navigation.navigate('AddTodo')} style={styles.button1}>
            <View>
                <MaterialCommunityIcons style={styles.plus1} name="plus" size={48} color={'#7497A7'} />
            </View>
            </TouchableOpacity>
                </View>
                </View>
                

            }
            <Text style={styles.title}>Tomorrow's Goals</Text>
            { tomorrowTodos.length > 0  
              ? <ListTodos todosData={tomorrowTodos} />
              : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                  <Image
                    source={require('../assets/images/Plants.png')}
                    style={{width: 200, height: 200, marginBottom: 20, marginTop: 30, resizeMode: 'contain'}}
                  />
                  <Text style={{fontSize: 13, color: '#000', fontWeight: 'bold'}}>It is time to relax.</Text>
                  <Text style={{fontSize: 13, color: '#737373', fontWeight: '500'}}>You currently have no goals scheduled for tomorrow.</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('AddTodo')} style={styles.button2}>
            <View>
                <MaterialCommunityIcons style={styles.plus2} name="plus" size={48} color={'#7497A7'} />
            </View>
            </TouchableOpacity>
                </View>
            }
            <StatusBar style='auto' />
        </View>
        : <View style={styles.container}>
            {/* <Image 
                source={{ uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-cleaning-1593202999.jpg'}} 
                style={styles.pic} /> */}
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    source={require('../assets/images/Whiteboard.png')}
                    style={{width: 300, height: 300, marginBottom: 20, resizeMode: 'contain'}}
                />
                <Text style={{fontSize: 13, color: '#000', fontWeight: 'bold'}}>Productivity is key to a healthy mind!</Text>
                <Text style={{fontSize: 13, color: '#737373', fontWeight: '500'}}>You currently have no goals to complete at the moment.</Text> 
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddTodo')} style={styles.button}>
            <View>
                <MaterialCommunityIcons style={styles.plus} name="plus" size={48} color={'#FFFFFF'} />
            </View>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title1: {
        fontWeight: '600',
        fontSize: 24,
        color: '#C4C4C4',
        marginTop: 20,
    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignSelf: 'flex-end'
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 30,
    },
    button: {
        color: '#FDECAA',
        marginLeft: 300,
        width: 60,
        height: 60,
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    plus: {
        marginTop: 5,
        marginLeft: 5,
        color: '#7497A7',
        
        
    },
    button1: {
        color: '#FDECAA',
        marginLeft: 300,
        width: 60,
        height: 60,
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: -105,
    },
    plus1: {
        marginTop: 5,
        marginLeft: 5,
        color: '#7497A7',
        
        
    },
    button2: {
        color: '#FDECAA',
        marginLeft: 300,
        width: 60,
        height: 60,
        marginTop: 80,
        marginBottom: -10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    plus2: {
        marginTop: 5,
        marginLeft: 5,
        color: '#7497A7',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        
    },
    

});