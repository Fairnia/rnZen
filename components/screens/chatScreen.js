import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FadeInOut from 'react-native-fade-in-out';
import Header from '../header'
import Footer from '../footer'
import Greetings from '../greetings'

const greetings = [
  {'greeting': 'Say hello to your partner' ,"duration":8000},
  {'greeting': 'May you be happy' ,"duration":8000},
  {'greeting': 'May you you be healthy' ,"duration":8000},
  {'greeting': 'May you stay safe' ,"duration":8000},
  {'greeting': 'Share a moment of presence with your partner' ,"duration":8000},
  {'greeting': 'Thank your partner and say goodbye' ,"duration":8000},
  {'greeting': '' ,"duration":8000},
]

export default function ChatScreen({navigation}) {
  const [greeting, setGreeting] = useState('');
  const [visible, setVisible] = useState(false);
  const [fadeDuration, setfadeDuration] = useState(2000);

  const greetingsRef = useRef();

  var i = 0;
  const callNextGreeting = ()=>{
    setTimeout(()=>{
      setVisible(false);
    }, greetings[i].duration-2000);

    setTimeout(()=>{
      i++;
      setGreeting(greetings[i].greeting);
      callGreeting();
    }, greetings[i].duration);
  }

  const callGreeting = () =>{
    if(greetings.length == i) {
      i = 0;
    }
    if( greetings.length-1 > i) {
      if(i === 0){
        setGreeting(greetings[i].greeting);
      }
      setVisible(true);
      callNextGreeting();
    }
  }

  const callShowGreetings = () =>{
     greetingsRef.current.startGreetings();
  }


  return (
    <View style={styles.footer}>
      <Header navigation = {navigation}/>
      <Text>hear ye! hear ye! This is my chatscreen!</Text>
      <Greetings ref = {greetingsRef}/>
      <Button
      title="Start Chatting"
      onPress={() => callShowGreetings()}
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
