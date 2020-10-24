import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../header'
import Footer from '../footer'


export default function TermsScreen({navigation}) {
  return (
    <View>
      <Header navigation = {navigation}/>
      <Text>Here ye! Here ye! These are my terms!</Text>
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
