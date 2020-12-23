import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screens/homeScreen';
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
        <Stack.Screen name="Home" component={HomeScreen}
         options={({ navigation }) => ({
          headerTitle: () => <Header navigation = {navigation} title='words' />
        })}
        />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'ZenGreet Chat', headerShown: false }} />
        <Stack.Screen name="Thankyou" component={ThankyouScreen} options={{ title: 'Thank you' }} />
        <Stack.Screen name="Terms" component={TermsScreen}  options={{ title: 'Terms and Conditions' }}/>
        <Stack.Screen name="Privacy" component={PrivacyScreen} options={{ title: 'Privacy' }}/>
        <Stack.Screen name="Blocked" component={BlockedScreen} options={{ title: 'User Blocked', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    border:"#939799 1px solid",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Things to do next:
  // modal - passing name to chatsreen
  // custom header
  // styled components
