import * as React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Switch, TouchableWithoutFeedback, Keyboard} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoReducer } from '../redux/todosSlice';
import * as Notifications from 'expo-notifications';

export default function AddTodo() {

    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [isToday, setIsToday] = React.useState(false);
    const [withAlert, setWithAlert] = React.useState(false);
    // const [listTodos, setListTodos] = React.useState([]);
    const listTodos = useSelector(state => state.todos.todos);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const addTodo = async () => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000000),
            text: name,
            hour: isToday ? date.toISOString() : new Date(date).getTime() + 24 * 60 * 60 * 1000,
            isToday: isToday,
            isComplited: false
        };
        try {
            await AsyncStorage.setItem('Todos', JSON.stringify([...listTodos, newTodo]));
            dispatch(addTodoReducer(newTodo));
            console.log('Goal has been saved successfully');
            if(withAlert){
                await scheduleTodoNotification(newTodo);
            }
            navigation.goBack();
        }
        catch (e) {
            console.log(e);
        }
    };

    const scheduleTodoNotification = async (todo) => {
        // set trigger time to todo.hour if todo.isToday === true else set trigger time to todo.hour + 24 hours
        // const trigger = todo.isToday ? todo.hour : new Date(todo.hour).getTime() + 24 * 60 * 60 * 1000;
        const trigger = new Date(todo.hour);
        try {
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Alert! You have a task to do!',
                    body: todo.text,
                },
                trigger,
            });
            console.log('Notification scheduled');
        } catch (e) {
            alert('The notification failed to schedule, make sure the hour is valid');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.container}>
            <Text style={styles.title}>Add a new goal to accomplish.</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Goal:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Apply for Academic Scholarship."
                    placeholderTextColor="#00000030"
                    onChangeText={(text) => {setName(text)}} 
                /> 
            </View>        
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Time:</Text>
                <DateTimePicker
                value={date}
                mode={'time'}
                is24Hour={true}
                onChange={(event, selectedDate) => setDate(selectedDate)}
                style={{width: '40%'}}
                />
            </View>
            <View style={[styles.inputContainer, {paddingBottom: 0, alignItems: 'center'}]}>
                <View>
                    <Text style={styles.inputTitle}>Set goal for today?</Text>
                    <Text style={{color: '#00000040', fontSize: 12, maxWidth: '84%', paddingBottom: 10}}>"off" will not set the goal for today.</Text>
                </View>
                <Switch
                    value={isToday}
                    onValueChange={(value) => { setIsToday(value) }}
                />
            </View>
            <View style={[styles.inputContainer, {paddingBottom: 0, alignItems: 'center'}]}>
                <View>
                    <Text style={styles.inputTitle}>Do you want to be notified?</Text>
                    <Text style={{color: '#00000040', fontSize: 12, maxWidth: '85%'}}>You will be reminded of the goals you need to complete.</Text>
                </View>
            <Switch
                    value={withAlert}
                    onValueChange={(value) => { setWithAlert(value) }}
                />
            </View>
            
            <TouchableOpacity onPress={addTodo} style={styles.button}>
                <Text style={{color: 'white', fontSize: 20,}}>Submit</Text>
            </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    textInput: {
        marginTop: -5,
        height: 35,
        borderRadius: 15,
        backgroundColor: '#FCFCFC',
        borderColor: '#7497A7',
        borderWidth: 2,
        width: '80%',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 30,
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24
    },
    inputContainer: {
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        paddingBottom: 30,
    },
    button: {
        marginTop: 30,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7497A7',
        height: 46,
        borderRadius: 11,
    }
});