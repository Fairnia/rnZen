import React from 'react';
import { Text, View, Button } from 'react-native';
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
