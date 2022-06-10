import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Settings = () => {
    return (
            <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Image
                    source={require('../assets/images/FindResources.png')}
                    style={{width: 300, height: 300, marginBottom: 20, resizeMode: 'contain'}}
                />
                <Text style={{fontSize: 13, color: '#000', fontWeight: 'bold'}}>A new feature is coming soon!</Text>
                <Text style={{fontSize: 13, color: '#737373', fontWeight: '500'}}>In the near future, users will be able to gain access to mood statistics to gain insight on overall well-being and mental health using interated responses from mood tracking.</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: 60,
    },
})

export default Settings