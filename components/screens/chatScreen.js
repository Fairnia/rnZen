import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Container} from '../../styles/styles'
import FadeInOut from 'react-native-fade-in-out';
import { UserContext } from '../../App'
import Header from '../header'
import Footer from '../footer'
import Greetings from '../greetings'


export default function ChatScreen({navigation}) {
  const { username, changeUsername } = useContext(UserContext);

  const greetingsRef = useRef();

  const callShowGreetings = () =>{
     greetingsRef.current.startGreetings();
  }

  return (
    <Container>
      <Header navigation = {navigation}/>
      <Text>hear ye! hear ye! This is my chatscreen {username}!</Text>
      <Greetings ref = {greetingsRef}/>
      <Button
      title="Start Chatting"
      onPress={() => callShowGreetings()}
      />
      <Button
      title="Stop Chatting"
      onPress={() => navigation.navigate('Thankyou')}
      />
      <Footer navigation = {navigation}/>
    </Container>
  );
}
