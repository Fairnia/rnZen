import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Container} from '../../styles/styles'
import FadeInOut from 'react-native-fade-in-out';
import Header from '../header'
import Footer from '../footer'
import Greetings from '../greetings'


export default function ChatScreen({route, navigation}) {
  const {displayName} = route.params.displayName;

  const greetingsRef = useRef();

  const callShowGreetings = () =>{
     greetingsRef.current.startGreetings();
  }

  return (
    <Container style={styles.footer}>
      <Header navigation = {navigation}/>
      <Text>hear ye! hear ye! This is my chatscreen! {displayName}</Text>
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

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    border:"#939799 1px solid",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:'50',
  },
});
