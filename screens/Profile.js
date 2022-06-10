import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, Button,  ScrollView, TouchableOpacity, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { authentication } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { getAuth} from 'firebase/auth';
import { useState } from 'react';
import MyModal from '../components/MyModal';
MaterialCommunityIcons.loadFont();

const Profile = () => {
    const isDarkMode = useColorScheme() === 'dark';
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const backgroundStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isModalOpen
      ? isDarkMode
        ? '#ffffff20'
        : 'gray'
      : isDarkMode
      ? '#000'
      : '#fff',
  };
  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 20,
    fontWeight: 'bold',
  };

    const navigation = useNavigation();
    const auth = getAuth()
    const user = auth.currentUser;

    const handleSignOut = () => {
        authentication
            .signOut()
            .then(() => {
            navigation.replace("Login")
    })
    .catch(error => alert(error.message))
    }
    return (
        <View>    
                <View>
                    <Text style={styles.homeTitle}>Account</Text>
                    <Text style={styles.email}>Currently logged in as:</Text>
                    <Text style={styles.auth}>{authentication.currentUser?.email}</Text>
      
                <View>
                <TouchableOpacity onPress={handleSignOut} style={styles.button1}>
                <Text style={{color: 'white', fontSize: 20,}}>Sign Out</Text>
            </TouchableOpacity>
            </View>
                </View>
                    
                
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
  homeTitle: {
    fontWeight: '700',
    fontSize: 32,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginLeft: 20,
        marginTop: 60,
        marginBottom: 20,
        
  },
email: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 20,
    marginLeft: 20,


},
auth: {
    marginLeft: 20,
    fontWeight: '500',
    color: '#C4C4C4',
    fontSize: 20,
    marginTop: -5,
},
signOut: {
    color: '#7497A7',
    shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      marginLeft: 310,
      marginTop: 300
},
button1: {
  marginTop: 30,
  marginBottom: 15,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#7497A7',
  height: 46,
  borderRadius: 11,
  margin: 70,
}
})

export default Profile;