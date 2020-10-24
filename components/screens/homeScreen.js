import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../header'
import Footer from '../footer'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation = {navigation}/>
      <View >
        <Text>Welcome to ZenGreet</Text>
        <Button
        title="Start Chatting"
        onPress={() => navigation.navigate('Chat')}
        />
      </View>
      <Footer navigation = {navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    border:"#939799 1px solid",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
