import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../header'
import Footer from '../footer'

const greetings = [
  {'greeting': 'Say hello to your partner' ,"duration":700},
  {'greeting': 'May you be happy' ,"duration":700},
  {'greeting': 'May you you be healthy' ,"duration":700},
  {'greeting': 'May you stay safe' ,"duration":700},
  {'greeting': 'Share a moment of presence with your partner' ,"duration":700},
  {'greeting': 'Thank your partner and say goodbye' ,"duration":700},
]

export default function ChatScreen({navigation}) {
  const [greeting, setGreeting] = useState(greetings[0].greeting);

  var interval = setInterval(function(){
    var obj = json.objects[i];
    // do whatever
    i++;
    if(i === greetings.length) clearInterval(interval);
  }, 5000);

  useEffect(() => {
    var interval = setInterval(function(){
      var obj = json.objects[i];
      // do whatever
      i++;
      if(i === greetings.length) clearInterval(interval);
    }, 5000);
  });

  return (
    <View style={styles.footer}>
      <Header navigation = {navigation}/>
      <Text>hear ye! hear ye! This is my chatscreen!</Text>
      <Text>{greeting}</Text>
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
