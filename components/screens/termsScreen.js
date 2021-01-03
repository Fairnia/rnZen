import React from 'react';
import { Text, View, Button } from 'react-native'
import {Container} from '../../styles/styles'
import Header from '../header'
import Footer from '../footer'


export default function TermsScreen({navigation}) {
  return (
    <Container>
      <Header navigation = {navigation}/>
      <Text>hear ye! hear ye! These are my terms!</Text>
      <Footer navigation = {navigation}/>
    </Container>
  );
}
