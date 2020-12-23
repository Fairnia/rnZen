import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Container} from '../../styles/styles'
import Header from '../header'
import Footer from '../footer'


export default function ThankyouScreen({navigation}) {
  return (
    <Container>
      <Header navigation = {navigation}/>
      <Text>Thanks for using ZenGreet!!!</Text>
      <Text>Here are somethings to reflect on </Text>
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
    justifyContent: 'center',
  },
});
