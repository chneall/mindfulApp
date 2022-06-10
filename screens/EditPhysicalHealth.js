import * as React from 'react';
import * as RN from 'react-native';
import { db } from '../firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

export default function EditPhysicalHealth({
    id,
    emoji,
    emoji1,
    emoji2,
    note,
    note1,
    note2,
    date,
    date1,
    date2,
    isMood,
    isMood1,
    isMood2,

}) {
    

    const onDelete = () => {
        const docRef = doc(db, 'PhysicalHealth', id);
        deleteDoc(docRef);
    }

    const onEdit = () => {
        const docRef = doc(db, 'PhysicalHealth', id);
        updateDoc(docRef, {
            isMood: true,
        });
    }

    const onDelete1 = () => {
        const docRef = doc(db, 'PhysicalHealth1', id);
        deleteDoc(docRef);
    }

    const onEdit1 = () => {
        const docRef = doc(db, 'PhysicalHealth1', id);
        updateDoc(docRef, {
            isMood1: true,
        });
    }

    const onDelete2 = () => {
        const docRef = doc(db, 'PhysicalHealth2', id);
        deleteDoc(docRef);
    }

    const onEdit2 = () => {
        const docRef = doc(db, 'PhysicalHealth2', id);
        updateDoc(docRef, {
            isMood2: true,
        });
    }


    return(
        <RN.View>
            <RN.View style={styles.productContainer}>
                <RN.View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <RN.Text style={styles.emoji}></RN.Text>
                    <MaterialCommunityIcons style={styles.delete} onPress={onDelete} name="delete-outline" size={24} color={'#C4C4C4'} />
                </RN.View>
                <RN.Text style={styles.date1}>Date: {date}</RN.Text>
                <RN.Text style={styles.note1}>Note: {note}</RN.Text>
                <RN.Text style={styles.mood1}>Mood: {emoji}</RN.Text>
                
                {isMood ? (
                    <RN.TouchableOpacity
                    style={[styles.button, {backgroundColor:'gray'}]}>
                        <RN.Text style={styles.buttonText}>Mood</RN.Text>
                    </RN.TouchableOpacity>
                )
                : (
                    <RN.TouchableOpacity
                    onPress={onEdit}
                    styles={styles.button}>
                        <RN.Text style={styles.buttonText}>Edit</RN.Text>
                    </RN.TouchableOpacity>
                )}

                
                
            </RN.View>

            <RN.View style={styles.productContainer}>
                <RN.View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <RN.Text style={styles.emoji}></RN.Text>
                    <MaterialCommunityIcons style={styles.delete} onPress={onDelete1} name="delete-outline" size={24} color={'#C4C4C4'} />
                </RN.View>
                <RN.Text style={styles.date}>Date: {date1}</RN.Text>
                <RN.Text style={styles.note}>Note: {note1}</RN.Text>
                <RN.Text style={styles.mood}>Mood: {emoji1}</RN.Text>
                {isMood1 ? (
                    <RN.TouchableOpacity
                    style={[styles.button, {backgroundColor:'gray'}]}>
                        <RN.Text style={styles.buttonText}>Mood</RN.Text>
                    </RN.TouchableOpacity>
                )
                : (
                    <RN.TouchableOpacity
                    onPress={onEdit1}
                    styles={styles.button}>
                        <RN.Text style={styles.buttonText}>Edit</RN.Text>
                    </RN.TouchableOpacity>
                )}

                
                
            </RN.View>

            <RN.View style={styles.productContainer}>
                <RN.View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <RN.Text style={styles.emoji}></RN.Text>
                    <MaterialCommunityIcons style={styles.delete} onPress={onDelete2} name="delete-outline" size={24} color={'#C4C4C4'} />
                </RN.View>
                <RN.Text style={styles.date2}>Date: {date2}</RN.Text>
                <RN.Text style={styles.note2}>Note: {note2}</RN.Text>
                <RN.Text style={styles.mood2}>Mood: {emoji2}</RN.Text>
                {isMood2 ? (
                    <RN.TouchableOpacity
                    style={[styles.button, {backgroundColor:'gray'}]}>
                        <RN.Text style={styles.buttonText}>Mood</RN.Text>
                    </RN.TouchableOpacity>
                )
                : (
                    <RN.TouchableOpacity
                    onPress={onEdit2}
                    styles={styles.button}>
                        <RN.Text style={styles.buttonText}>Edit</RN.Text>
                    </RN.TouchableOpacity>
                )}

                
                
            </RN.View>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center'
   },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    delete: {
        marginBottom: -15,
    },
    date: {
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',        
    },
    note: {
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',
    },
    mood: {
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',
    },
    date1: {
        
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',    
    },
    note1: {
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',
    },
    mood1: {
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',
    },
    date2: {
        
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',    
    },
    note2: {
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',
    },
    mood2: {
        fontSize: 20,
        fontWeight: '600',
        color: '#C4C4C4',
    },
    
});