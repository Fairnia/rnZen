import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Text, View } from 'react-native';
import FadeInOut from 'react-native-fade-in-out';

const greetings = [
  {'greeting': 'Say hello to your partner' ,"duration":8000},
  {'greeting': 'May you be happy' ,"duration":8000},
  {'greeting': 'May you you be healthy' ,"duration":8000},
  {'greeting': 'May you stay safe' ,"duration":8000},
  {'greeting': 'Share a moment of presence with your partner' ,"duration":8000},
  {'greeting': 'Thank your partner and say goodbye' ,"duration":8000},
  {'greeting': '' ,"duration":8000},
]

const Greetings = forwardRef((props,ref) =>{
  const [greeting, setGreeting] = useState('');
  const [visible, setVisible] = useState(false);
  const [fadeDuration, setfadeDuration] = useState(2000);
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
    console.log('called from mommma!')
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
  useImperativeHandle(ref, () => ({
    startGreetings: () => {
        callGreeting();
    }
  }));


  return (
    <View >
      <FadeInOut visible={visible} duration={fadeDuration}>
        <Text>{greeting}</Text>
      </FadeInOut>
    </View>
  );
})

export default Greetings;
