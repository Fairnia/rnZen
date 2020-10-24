import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Footer from '../footer'


export default function PrivacyScreen({navigation}) {
  return (
    <View style={styles.footer}>
      <Text>Sorry but you've been blocked! You can no longer use ZenGreet at this time.</Text>
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
