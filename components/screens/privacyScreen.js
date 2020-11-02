import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../header'
import Footer from '../footer'


export default function PrivacyScreen({navigation}) {
  return (
    <View style={styles.footer}>
      <Header navigation = {navigation}/>
      <Text>hear ye! hear ye! Here is my request for privacy please!!!</Text>
      <Footer navigation = {navigation}/>
    </View>
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
