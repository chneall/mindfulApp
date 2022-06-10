import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Checkin from './screens/Checkin';
import Resources from './screens/Resources';
import DailyLoginAcitivity from './screens/DailyLoginActivity';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import MentalHealth from './screens/MentalHealth';
import EmotionalHealth from './screens/EmotionalHealth';
import AddEmotionalHealth from './screens/AddEmotionalHealth';
import PhysicalHealth from './screens/PhysicalHealth';
import AddPhysicalHealth from './screens/AddPhysicalHealth';
import SocialHealth from './screens/SocialHealth';
import AddSocialHealth from './screens/AddSocialHealth';
import EditSocialHealth from './screens/EditSocialHealth';
import AddTodo from './screens/AddTodo';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Homee from './screens/Homee';
import Todo from './components/Todo';
import OnboardingItem from './screens/OnboardingItem';
import EditMentalHealth from './screens/EditMentalHealth';
import AddMentalHealth from './screens/AddMentalHealth';






Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Tab = createBottomTabNavigator();

function TabNavigator ({navigation}) {

  return (
    <Tab.Navigator
    TabBarOptions={{
      style: styles.tabBar,
      activeTintColor: '#7497A7',
      inactiveTintColor: '#C4C4C4',
      showLabel: false,
      // does not display text underneath tab bar icons
    }}>
      <Tab.Screen  name="Home" component={Home} options={{ headerShown: false,
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home-outline" size={32} color={color} />
        ),
        }}
        />
      <Tab.Screen  name="Profile" component= {Profile} options={{ headerShown: false,
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account-outline" size={32} color={color} />
        ),
      }} 
      />
      <Tab.Screen name="Stats" component={Settings} options={{ headerShown: false,
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="google-analytics" size={32} color={color} />
        ),
      }}
      />
    </Tab.Navigator>  
  );
};

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name = "Onboarding" component={Onboarding} />
        <Stack.Screen options={{ headerShown: false }} name = "Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name = "Signup" component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name = "TabNavigator" component={TabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name = "Checkin" component={Checkin} />
        <Stack.Screen options={{ headerShown: false }} name = "MentalHealth" component={MentalHealth} />
        <Stack.Screen options={{ headerShown: true, headerLeft: null, title: "Add a new feeling" ,presentation: "modal" }} name = "AddMentalHealth" component={AddMentalHealth} />
        <Stack.Screen options={{ headerShown: false }} name = "EditMentalHealth" component={EditMentalHealth} />
        <Stack.Screen options={{ headerShown: false }} name = "EmotionalHealth" component={EmotionalHealth} />
        <Stack.Screen options={{ headerShown: true, headerLeft: null, title: "Add a new feeling" ,presentation: "modal" }} name = "AddEmotionalHealth" component={AddEmotionalHealth} />
        <Stack.Screen options={{ headerShown: false }} name = "PhysicalHealth" component={PhysicalHealth} />
        <Stack.Screen options={{ headerShown: true, headerLeft: null, title: "Add a new feeling" ,presentation: "modal" }} name = "AddPhysicalHealth" component={AddPhysicalHealth} />
        <Stack.Screen options={{ headerShown: false }} name = "SocialHealth" component={SocialHealth} />
        <Stack.Screen options={{ headerShown: true, headerLeft: null, title: "Add a new feeling" ,presentation: "modal" }} name = "AddSocialHealth" component={AddSocialHealth} />
        <Stack.Screen options={{ headerShown: false }} name = "EditSocialHealth" component={EditSocialHealth} />
        <Stack.Screen options={{ headerShown: false }} name = "Resources" component={Resources} />
        <Stack.Screen options={{ headerShown: false }} name = "Daily Login Activity" component={DailyLoginAcitivity} />
        <Stack.Screen options={{ headerShown: false }} name = "Profile" component={Profile} />
        <Stack.Screen options={{ headerShown: false }} name = "Settings" component={Settings} />
        <Stack.Screen options={{ headerShown: false }} name = "Homee" component={Homee} />
        <Stack.Screen options={{ headerShown: true, headerLeft: null, title: "Add a new goal" ,presentation: "modal" }} name = "AddTodo" component={AddTodo} />
        <Stack.Screen options={{ headerShown: false }} name = "Todo" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  tabBar: {
    borderRadius: 30,
  }
});
