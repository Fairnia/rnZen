import React from 'react';
import { Text, View, Button } from 'react-native';
import {Container} from '../../styles/styles'
import Footer from '../footer'


export default function BlockedScreen({navigation}) {
  return (
    <Container >
      <Text>It appears that several of your former partners weren't happy with the way you treated them :(  </Text>
      <Text> You've been reported several times and as a result have been blocked from using ZenGreet at this time. </Text>
      <Footer navigation = {navigation}/>
    </Container>
  );
}
