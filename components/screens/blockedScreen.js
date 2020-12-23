import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Container} from '../../styles/styles'
import Footer from '../footer'


export default function PrivacyScreen({navigation}) {
  return (
    <Container style={styles.footer}>
      <Text>Sorry but you've been blocked! You can no longer use ZenGreet at this time.</Text>
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
