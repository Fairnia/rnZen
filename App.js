import React, { useState, useEffect, createContext } from 'react';
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

export const UserContext = createContext("");

export default function App() {
  const [username, setUsername] = useState("Human");
  const [userBlocked, setUserBlocked] = useState()
  // check local storage to see if userBlocked is true
  const changeUsername = (name) =>{
    setUsername(name)
  }
  const localStorageBlock = false;
  useEffect( () => localStorageBlock ? setUserBlocked(true) : setUserBlocked(false));

  return (
    <UserContext.Provider value={{username, changeUsername}} >
      <NavigationContainer initialRouteName="Home">
        { userBlocked == true && (
          <Stack.Navigator>
            <Stack.Screen name="Blocked" component={BlockedScreen} options={{ title: 'UserBlocked', headerShown: false }} />
          </Stack.Navigator>
        )}
        { userBlocked == false && (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name="Username" component={UsernameScreen} options={{ title: 'Select Username', headerShown: true }} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat', headerShown: false }} />
            <Stack.Screen name="Thankyou" component={ThankyouScreen} options={{ title: 'Thank you' }} />
            <Stack.Screen name="Terms" component={TermsScreen}  options={{ title: 'Terms and Conditions' }}/>
            <Stack.Screen name="Privacy" component={PrivacyScreen} options={{ title: 'Privacy' }}/>
            <Stack.Screen name="Blocked" component={BlockedScreen} options={{ title: 'User Blocked', headerShown: false }} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </UserContext.Provider>
    )
}
