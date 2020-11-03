import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../header'
import Footer from '../footer'

const greetings = [
  {'greeting': 'Say hello to your partner' ,"duration":200},
  {'greeting': 'May you be happy' ,"duration":200},
  {'greeting': 'May you you be healthy' ,"duration":4000},
  {'greeting': 'May you stay safe' ,"duration":500},
  {'greeting': 'Share a moment of presence with your partner' ,"duration":4000},
  {'greeting': 'Thank your partner and say goodbye' ,"duration":700},
  {'greeting': '' ,"duration":700},
]

export default function ChatScreen({navigation}) {
  const [greeting, setGreeting] = useState('');

  var i = 0;
  const callGreeting = ()=>{
    setTimeout(()=>{
      setGreeting(greetings[i].greeting);
      i++;
      callNextGreeting(i);
    }, greetings[i].duration);
  }

  const callNextGreeting = (i) =>{
    console.log('next greeting called ', i);
    if( greetings.length > i) {
      callGreeting();
    }
  }


  return (
    <View style={styles.footer}>
      <Header navigation = {navigation}/>
      <Text>hear ye! hear ye! This is my chatscreen!</Text>
      <Text>{greeting}</Text>
      <Button
      title="Start Chatting"
      onPress={() => callGreeting()}
      />
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
    justifyContent: 'space-between',
    padding:'50',
  },
});
