import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';
import { authentication } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("TabNavigator")
            }
        })
        return unsubscribe
    }, [])

    const signInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Successfully signed in with", user.email);
        })
        .catch((err) => {
            console.log(err);
            Alert.alert("Please fill in all required fields.")
            isLoading(false)
        
        })
        if (loading) {
            return (
                <View>
                    <ActivityIndicator size="large" color="black"/>
                </View>
            )
        }

    }

    return (
        <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        <View style={styles.container}>
            <Image
            source={require("../assets/images/4AAADB83EBA548FD85147040C134BCEF.png")}
            resizeMode="contain"
            style={styles.image1}
            ></Image>
        </View>
        <Text style={styles.message}>
        where your well-being {"\n"}matters.
        </Text>
      <View style={styles.container}>
          <Text style={styles.signin2}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
          <TextInput
          placeholder="Email*"
          autoFocus={true}
          textContentType='emailAddress'
          autoCapitalize='none'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password*"
          autoFocus={true}
          autoCapitalize='none'
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
    </View>

    <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={signInUser}
            style={styles.loginButton}
        > 
        <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.or}>or</Text>
        
        <TouchableOpacity
            onPress = {() => navigation.navigate("Signup")}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Sign up</Text>

        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>

    )
}


const styles = StyleSheet.create({
    image1: {
        width: 200,
        height: 100,
        marginTop: 180,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7497A7',
        marginLeft: -9,
    },

    message: {
        color: '#F9FAFB',
        shadowColor: "rgba(255,255,255,1)",
        shadowOpacity: 0.01,
        shadowRadius: 0,
        elevation: 5,
        shadowOffset: {
          width: 3,
          height: 3
        },
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 220,
        marginLeft: 31,
        shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
      },
    
    signin2: {
        fontSize: 28,
        paddingHorizontal: 30,
        marginRight: 200,
        fontWeight: '600',
        color: '#FFFFFF',
        marginTop: 20,
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
        marginBottom: -150,

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
    marginBottom: 110,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
},
loginButton: {
    backgroundColor: '#93B0BC',
    width: 180,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,


},
button: {
    backgroundColor: '#E4F2F8',
    width: 180,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,


},
buttonOutline: {
    backgroundColor: '#F5F5F5',
    marginTop: 15,
    marginBottom: 70,

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
or: {
    marginTop: 20,
    fontSize: 15,
    marginBottom: -10,
    marginTop: 7,
    fontWeight: '500',
    
},
mindful: {
    width: 114,
    height: 123,
    marginLeft: 30,
    marginTop: 140,
},


})

export default Login