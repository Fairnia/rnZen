import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../header'
import Footer from '../footer'


export default function ChatScreen({navigation}) {
  return (
    <View>
      <Header navigation = {navigation}/>
      <Text>Here ye! Here ye! This is my chatscreen!</Text>
      <Button
      title="Stop Chatting"
      onPress={() => navigation.navigate('Thankyou')}
      />
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
