import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/homeScreen';
import UsernameScreen from './components/screens/usernameScreen';
import TermsScreen from './components/screens/termsScreen';
import PrivacyScreen from './components/screens/privacyScreen';
import ChatScreen from './components/screens/chatScreen';
import ThankyouScreen from './components/screens/thankyouScreen';
import BlockedScreen from './components/screens/blockedScreen';
import Header from './components/header';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="Username" component={UsernameScreen} options={{ title: 'Select Username', headerShown: true }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'ZenGreet Chat', headerShown: false }} />
        <Stack.Screen name="Thankyou" component={ThankyouScreen} options={{ title: 'Thank you' }} />
        <Stack.Screen name="Terms" component={TermsScreen}  options={{ title: 'Terms and Conditions' }}/>
        <Stack.Screen name="Privacy" component={PrivacyScreen} options={{ title: 'Privacy' }}/>
        <Stack.Screen name="Blocked" component={BlockedScreen} options={{ title: 'User Blocked', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
