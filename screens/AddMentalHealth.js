import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable, KeyboardAvoidingView } from 'react-native';
import { db } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import * as RN from 'react-native';
import { render } from 'react-dom';


const moodIcons = [
    { emoji: '😊', 
    description: 'happy' 
    },
    
]

const moodIcons1 = [
  { emoji1: '🥱', 
  description1: 'tired' 
  },
  
]

const moodIcons2 = [
  { emoji2: '😔', 
  description2: 'sad' 
  },
  
]
const AddMentalHealth = ({navigation}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [feeling, setFeeling] = React.useState({
        emoji: '😊',
        date: '',
        note: '',
        isMood: false,
        createdAt: new Date(),

    });

    const [feeling1, setFeeling1] = React.useState({
      emoji1: '🥱',
      date1: '',
      note1: '',
      isMood1: false,
      createdAt: new Date(),

  });

    const [feeling2, setFeeling2] = React.useState({
      emoji2: '😔',
      date2: '',
      note2: '',
      isMood2: false,
      createdAt: new Date(),

  });




    const handlePick = (emojiObject) => {
        setFeeling({
            ...feeling,
            emoji: emojiObject.emoji
        });
    }

    const handlePick1 = (emojiObject1) => {
      setFeeling1({
          ...feeling1,
          emoji1: emojiObject1.emoji1
      });
  }

    const handlePick2 = (emojiObject2) => {
      setFeeling2({
          ...feeling2,
          emoji2: emojiObject2.emoji2
      });
}

    const onSend = async () => {
        const docRef = await addDoc(collection(db, "MentalHealth"), feeling)
        navigation.goBack("Home");
    }

    const onSend1 = async () => {
      const docRef = await addDoc(collection(db, "MentalHealth1"), feeling1)
      navigation.goBack("Home");
  }

    const onSend2 = async () => {
      const docRef = await addDoc(collection(db, "MentalHealth2"), feeling2)
      navigation.goBack("Home");
  }
          

    return (
        <ScrollView>
          <View style={styles.headingWrapper}></View>
          <Text style={styles.heading}>How are you</Text>
        <Text style={styles.heading2}>mentally</Text>
        <View style={styles.headingWrapper}></View>
        <Text style={styles.heading3}>feeling today?</Text>
            
            
        <KeyboardAvoidingView
            behavior={Platform.OS==='ios' ? 'padding' : 'height'}
            behavior='padding'>
                        <Text style={styles.todayDate}>Date</Text>
                <RN.TextInput 
                    onChangeText={(text) => setFeeling({...feeling, date: text})}
                    style={styles.inputDateContainer} 
                    placeholder='MM/DD/YYYY' 
                />
                        <Text style={styles.todayDate}>Note</Text>
                <RN.TextInput 
                    onChangeText={(text) => setFeeling({...feeling, note: text})}
                    style={styles.inputContainer} 
                    multiline={true}
                   placeholder='Perhaps, describe why your feeling this emotion?' 
                />

        </KeyboardAvoidingView>
        <Text style={styles.headerText}>Choose an emoji that best describes how you are feeling right now.</Text>
        <View style={styles.container}>
        <View style={styles.moodList}></View>
        <View style={styles.moodList}>
          {moodIcons.map(option => (
            <View key={option.description}>
              <Pressable
                onEmojiSelected={handlePick}
                open={isOpen}
              onClose={() => setIsOpen(false)} 
                onPress={() => setFeeling(option)}
                style={[
                  styles.moodItem,
                  option.emoji === feeling?.emoji
                    ? styles.selectedMoodItem
                    : undefined,
                ]}>
                <Text style={styles.moodText}>{option.emoji}</Text>
              </Pressable>
              <Text style={styles.descriptionText}>
                {feeling?.emoji === option.emoji ? option.description : ''}
              </Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.button} onPress={onSend}>
          <Text style={styles.buttonText}>Choose</Text>
        </Pressable>
      </View>
      
      <View>
      <KeyboardAvoidingView
            behavior={Platform.OS==='ios' ? 'padding' : 'height'}
            behavior='padding'>
                        <Text style={styles.todayDate}>Date</Text>
                <RN.TextInput 
                    onChangeText={(text) => setFeeling1({...feeling1, date1: text})}
                    style={styles.inputDateContainer} 
                    placeholder='MM/DD/YYYY' 
                />
                        <Text style={styles.todayDate}>Note</Text>
                <RN.TextInput 
                    onChangeText={(text) => setFeeling1({...feeling1, note1: text})}
                    style={styles.inputContainer} 
                    multiline={true}
                   placeholder='Perhaps, describe why your feeling this emotion?'  
                />
      </KeyboardAvoidingView>
      <Text style={styles.headerText}>Choose an emoji that best describes how you are feeling right now.</Text>
        <View style={styles.container}>
        <View style={styles.moodList}></View>
        <View style={styles.moodList}>
          {moodIcons1.map(option1 => (
            <View key={option1.description1}>
              <Pressable
                onEmojiSelected={handlePick1}
                open={isOpen}
              onClose={() => setIsOpen(false)} 
                onPress={() => setFeeling1(option1)}
                style={[
                  styles.moodItem,
                  option1.emoji1 === feeling1?.emoji1
                    ? styles.selectedMoodItem
                    : undefined,
                ]}>
                <Text style={styles.moodText}>{option1.emoji1}</Text>
              </Pressable>
              <Text style={styles.descriptionText}>
                {feeling1?.emoji1=== option1.emoji1 ? option1.description1 : ''}
              </Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.button} onPress={onSend1}>
          <Text style={styles.buttonText}>Choose</Text>
        </Pressable>
      </View>
        </View>

        <View>
        <View>
      <KeyboardAvoidingView
            behavior={Platform.OS==='ios' ? 'padding' : 'height'}
            behavior='padding'>
                        <Text style={styles.todayDate}>Date</Text>
                <RN.TextInput 
                    onChangeText={(text) => setFeeling2({...feeling2, date2: text})}
                    style={styles.inputDateContainer} 
                    placeholder='MM/DD/YYYY' 
                />
                        <Text style={styles.todayDate}>Note</Text>
                <RN.TextInput 
                    onChangeText={(text) => setFeeling2({...feeling2, note2: text})}
                    style={styles.inputContainer} 
                    multiline={true}
                   placeholder='Perhaps, describe why your feeling this emotion?'  
                />
      </KeyboardAvoidingView>
      <Text style={styles.headerText}>Choose an emoji that best describes how you are feeling right now.</Text>
        <View style={styles.container}>
        <View style={styles.moodList}></View>
        <View style={styles.moodList}>
          {moodIcons2.map(option2 => (
            <View key={option2.description2}>
              <Pressable
                onEmojiSelected={handlePick2}
                open={isOpen}
              onClose={() => setIsOpen(false)} 
                onPress={() => setFeeling1(option2)}
                style={[
                  styles.moodItem,
                  option2.emoji2 === feeling2?.emoji2
                    ? styles.selectedMoodItem
                    : undefined,
                ]}>
                <Text style={styles.moodText}>{option2.emoji2}</Text>
              </Pressable>
              <Text style={styles.descriptionText}>
                {feeling2?.emoji2=== option2.emoji2 ? option2.description2 : ''}
              </Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.button} onPress={onSend2}>
          <Text style={styles.buttonText}>Choose</Text>
        </Pressable>
      </View>
        </View>
        </View>

      </ScrollView>
        
        

        
    )
}

export default AddMentalHealth

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#7497A7',
        width: 180,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 110,
        marginBottom: 25,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: '500',
      fontSize: 18,
    },
    headingWrapper: {
      marginHorizontal: 10,
      marginTop: 20,
  },
  heading: {
      fontWeight: '700',
      fontSize: 32,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  },
  heading2: {
      color: '#7497A7',
      fontSize: 32,
      fontWeight: '700',
      shadowColor: '#000',
      marginTop: -49,
      marginLeft: 200,
      shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  },
  heading3: {
      fontWeight: '700',
      fontSize: 32,
      margin: 10,
      shadowColor: '#000',
      marginTop: -20,
      shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  },
  headerText: {
      fontWeight: '500',
      fontSize: 24,
      color: '#C4C4C4',
      marginTop: 5,
      marginBottom: 25,
      marginTop: 20,
      margin: 10,
  },
    buttonOutline: {
        backgroundColor: '#F5F5F5',
        marginTop: 15,
        marginBottom: 70,
    
    },
    todayDate: {
      fontSize: 20,
        fontWeight: '600',
        lineHeight: 20,
        margin: 10,
    },
    inputContainer: {
      marginTop: 5,
        height: 35,
        borderRadius: 15,
        backgroundColor: '#FCFCFC',
        borderColor: '#7497A7',
        borderWidth: 2,
        width: '95%',
        margin: 10,
        height: 60,
        paddingHorizontal: 20,
    },
    inputDateContainer: {
      marginTop: 5,
        height: 35,
        borderRadius: 15,
        backgroundColor: '#FCFCFC',
        borderColor: '#7497A7',
        borderWidth: 2,
        width: '35%',
        margin: 10,
        height: 40,
        paddingHorizontal: 20,
    },
    moodText: {
      fontSize: 50,
      marginLeft: 160,
      marginTop: -30,
    },
    descriptionText: {
      marginLeft: 160,
      marginTop: -5,
      fontWeight: '600',
      fontSize: 22,
    },
    })
    
    