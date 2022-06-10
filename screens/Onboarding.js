import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';


const Onboarding = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
           <Image
            source={require("../assets/images/4AAADB83EBA548FD85147040C134BCEF.png")}
            resizeMode="contain"
            style={styles.mindful}
            ></Image>
      <Text style={styles.keeping}>
        Learn to be mindful{"\n"}of your {"\n"}well-being.
      </Text>

      <View style={styles.container}>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={styles.button1}
      >
        <Text style={styles.signupButton}>Sign Up</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
// can change navigation.navigate to 'TabNavigator' to bypass
// login until authorization takes place
export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7497A7',
    
  },
  keeping: {
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
    fontSize: 45,
    marginTop: 80,
    marginLeft: 31,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  },
  button: {
    width: 176,
    height: 64,
    backgroundColor: '#E4F2F8',
    borderRadius: 15,
    overflow: "visible",
    shadowColor: "rgba(255,255,255,1)",
    shadowOpacity: 0.01,
    shadowRadius: 0,
    elevation: 5,
    shadowOffset: {
      width: 3,
      height: 3
    },
    marginTop: 250,
    marginLeft: 10,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  },
  loginButton: {
    fontWeight: "600",
    color: "#121212",
    width: 161,
    height: 40,
    fontSize: 30,
    marginTop: 15,
    marginLeft: 50,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
  },

  button1: {
    width: 176,
    height: 64,
    backgroundColor: '#E4F2F8',
    borderRadius: 15,
    overflow: "visible",
    shadowColor: "rgba(255,255,255,1)",
    shadowOpacity: 0.01,
    shadowRadius: 0,
    elevation: 5,
    shadowOffset: {
      width: 3,
      height: 3
    },
    marginTop: -64,
    marginLeft: 200,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  },

  signupButton: {
    fontWeight: "600",
    color: "#121212",
    width: 161,
    height: 40,
    fontSize: 30,
    marginTop: 15,
    marginLeft: 40,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
  },

  mindful: {
      width: 114,
      height: 123,
      marginLeft: 140,
  },

  signin2: {
    fontSize: 28,
    paddingHorizontal: 30,
    marginRight: 200,
    fontWeight: '600',
    
},
})

