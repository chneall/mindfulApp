import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { authentication } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const Signup = ({navigation}) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword]= useState();

    function fullNameChange (value) {
        setFullName(value);
    }

    const RegisterUser = () => {
        createUserWithEmailAndPassword(authentication, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Successfully signed up with', user.email)
        })
        .catch ((err) => {
            console.log(err);
            Alert.alert("Please fill in all required fields.")
        
        })

    }


return (

<KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
            <Image
            source={require("../assets/images/4AAADB83EBA548FD85147040C134BCEF.png")}
            resizeMode="contain"
            style={styles.mindful}
            ></Image>

<ScrollView>
      <View style={styles.container}>
          <Text style={styles.signin2}>Sign Up</Text>
      </View>
      
      <View style={styles.inputContainer}>
      <TextInput
          placeholder="Full name*"
          value={fullName}
          onChangeText={(text) => fullNameChange(text)}
          style={styles.input}
        />
          <TextInput
          placeholder="Email*"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password*"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password*"
          value={confirmPassword}
          onChangeText={text => setconfirmPassword(text)}
          style={styles.input}
          secureTextEntry
        />
    </View>
    
    
    
    

    <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={RegisterUser}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
)}



const styles = StyleSheet.create({
    image1: {
        width: 300,
        height: 200,
        marginTop: 60,
        marginBottom: -50,
        marginLeft: 20,
        marginRight: 20,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7497A7',
        marginLeft: -9,
    },
    
    signin2: {
        fontSize: 28,
        paddingHorizontal: 30,
        marginRight: 190,
        fontWeight: '600',
        color: '#FFFFFF',
        marginTop: 140,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
    },
    inputContainer: {
        width: 300,
        height: 250,
        marginBottom: -5,
        marginLeft: 20,
        marginRight: 20,
        

    },
    input: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        marginTop: 10,

},
buttonContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
    marginLeft: 140,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
},
button: {
    backgroundColor: '#93B0BC',
    width: 180,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 0,


},
buttonText: {
    color: '#F9FAFB',
    fontWeight: '700',
    fontSize: 16,


},
buttonOutlineText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
},
signupBack: {
    marginTop: 100,
    marginLeft: -160,
    
},
mindful: {
    width: 114,
    height: 123,
    marginLeft: 30,
    marginTop: 40,
},


})
export default Signup