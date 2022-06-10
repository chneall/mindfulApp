import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, TouchableOpacity, ImageBackground, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {

    MaterialCommunityIcons.loadFont();

    const Goals = [
        {
            id: 'goals',
            title: "Goals",
            Text: "Let's prioritze your tasks.",
            image: require("../assets/images/Goals.png")
        },
    ];

    const Checkin = [
        {
            id: 'checkin',
            title: "Check-in",
            Text: "How are you feeling today?",
            image: require("../assets/images/Checkin.png")
        },
    ];

    const FindResources = [
        {
            id: 'findResources',
            title: "Find Resources",
            Text: "Find personalized resources near you.",
            image: require("../assets/images/resources.png")
        },
    ];

    const renderHomeItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Checkin',{
                item: item,
            })}
            >
                <ImageBackground
                source={item.image}
                style={styles.homeItem}
                imageStyle={styles.homeItemImage}>
                <Text style={styles.homeItemTitle}>{item.title}</Text>
                <Text style={styles.Text}>{item.Text}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    };
    
    // exemplifies the navigation throughout the home screen
    const renderHomeItem2 = ({item}) => {
        return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Homee',{
                item: item,
            })}
            >
                <ImageBackground
                source={item.image}
                style={styles.homeItem2}
                imageStyle={styles.homeItemImage2}>
                <Text style={styles.homeItemTitle2}>{item.title}</Text>
                <Text style={styles.Text}>{item.Text}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    };
    // exemplifies the navigation throughout the home screen
    const renderHomeItem3 = ({item}) => {
        return (
            <TouchableOpacity
            onPress={() => navigation.navigate('Resources',{
                item: item,
            })}
            >
                <ImageBackground
                source={item.image}
                style={styles.homeItem3}
                imageStyle={styles.homeItemImage3}>
                <Text style={styles.homeItemTitle3}>{item.title}</Text>
                <Text style={styles.Text}>{item.Text}</Text>
                </ImageBackground>
            </TouchableOpacity>
    
        )
    };
    return (
        <View>
        <ScrollView>
            {/* Header */}
            <SafeAreaView>
            <View style={styles.homeWrapper}>
            <Image
            source={require("../assets/images/4AAADB83EBA548FD85147040C134BCEF.png")}
            resizeMode="contain"
            style={styles.image1}
            ></Image>
                <Text style={styles.hiThere}>Hi there,</Text>
                <Text style={styles.homeTitle}>Let's become more mindful!</Text>    
            </View>
            
            </SafeAreaView>

            {/*Goals*/}
            <View style={styles.homeItemsWrapper}>
                <FlatList
                data={Checkin}
                renderItem={renderHomeItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>

            {/* Check-in */}
            <View style={styles.studProfilesWrapper}>
            <View style={styles.studProfilesItemsWrapper}>
                <FlatList
                data={Goals}
                renderItem={renderHomeItem2}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>
            </View>

            {/* Find Resources */}
            <View style={styles.classInfoWrapper}>
            <View style={styles.classInfoItemsWrapper}>
                <FlatList
                data={FindResources}
                renderItem={renderHomeItem3}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>
            </View>
            </ScrollView>
    </View>
)
};
            

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

homeWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
},
homeTitle: {
    fontWeight: '700',
    fontSize: 32,
    marginTop: -15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
},
hiThere: {
    fontWeight: '600',
    fontSize: 24,
    color: '#C4C4C4',
    marginTop: -15,
    marginBottom: 20,
},

menuWrapper: {
    marginHorizontal: 20,
    marginTop: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

},
homeWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
},
homeItem: {
    width: 350,
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginLeft: 20,
    marginRight: 30,
    marginBottom: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#7497A7',
    flex: 1,

},

homeItemTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 115,
    marginLeft: 5,


},
homeItemImage: {
    height: 200,
    width: 150,
    marginLeft: 220,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
},
studProfilesItemsWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',

},
classInfoItemsWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row'
},
homeItem2: {
    width: 350,
    height: 200,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginLeft: 20,
    marginRight: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FDECAA',

},
homeItemImage2: {
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginLeft: -20,
    height: 200,
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

},
homeItemTitle2: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 115,
    marginLeft: 270,

},
classInfoWrapper: {
    marginHorizontal: 10,

},
homeItem3: {
    width: 350,
    height: 200,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginLeft: 20,
    marginRight: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FDD8AF',


},
homeItemImage3: {
    height: 220,
    width: 150,
    marginTop: -15,
    marginLeft: 225,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

},
homeItemTitle3: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 100,
    marginLeft: 5,

},
staffProfilesWrapper: {
    marginHorizontal: 10,

},
staffProfilesItemsWrapper: {
    justifyContent: 'flex-end',


},
homeItem4: {
    backgroundColor: '#F6F2ED',
    width: 350,
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginLeft: 20,
    marginRight: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

},
homeItemImage4: {
    borderRadius: 15,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,


},
homeItemTitle4: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: -30,
    marginLeft: 35,


},
Text: {
    fontWeight: '800',
    fontSize: 24,
    color: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
},
image1: {
    width: 200,
    height: 100,
    marginTop: -20,
    marginLeft: 80,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

},



});



export default Home