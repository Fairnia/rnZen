import React, { useState, useContext } from 'react';
import { Text, View, Button, TextInput, Image, TouchableHighlight, Alert} from 'react-native'
import { UserContext } from '../../App'
import { Container } from '../../styles/styles'
import Header from '../header'
import Footer from '../footer'
import { checkNameforNoNoWords } from '../../nonoWords'

export default function UsernameScreen({navigation}) {
  const { username, changeUsername } = useContext(UserContext);
  const [ nameInput, changenameInput ] = useState(username);
  const [ displayErrMsgs, changeDisplayErrMsgs ] = useState({});
  const [disableInput, changeDisableInput ] = useState(false)
  const allErrorMsgs = {
    "exceedMaxLength": "Sorry, your name can't be longer than 15 letters.",
    "englishLetters": "Sorry, you can only use English letters for your name. This includes no spaces.",
    "nonoWords": "You've selected a name that's on our no no list, please use a different name.",
  };

// name validation once it has been submitted
// need to still put name into local storage
  const vetNameBeforeChat = () =>{
    const nonoWords = checkNameforNoNoWords(nameInput);
    if(nonoWords){
      let currentErrMsgs = {'nonoWords': allErrorMsgs['nonoWords']}
      changeDisplayErrMsgs(currentErrMsgs);
    }else{
      navigation.navigate('Chat');
      changeUsername(nameInput);
    }
  }

//name validation during input gets charMsgs then disable input button
  const checkChars = ( text ) =>{
    const charErrMsgs = {}

    if( text.length > 15 ){
      charErrMsgs['exceedMaxLength'] = allErrorMsgs['exceedMaxLength'];
      text = text.slice(0,15);
    }

    const notLetters = text.match(/[^A-Za-z]/ig);
    if( notLetters ){
      charErrMsgs['englishLetters'] = allErrorMsgs['englishLetters'];
    }

    //if errors show up then disable submit button
    Object.keys(charErrMsgs).length > 0 ? changeDisableInput(true) : changeDisableInput(false)

    changeDisplayErrMsgs(charErrMsgs);
    changenameInput(text);
  }

  return (
    <Container>
      <Header navigation = {navigation}/>
      <View >
        <Text>Select a username</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 , paddingLeft:'5%'}}
          maxLength = {16}
          onChangeText={text => checkChars(text)}
          value = {nameInput}
        />

        { displayErrMsgs && Object.entries(displayErrMsgs).map(([key, value]) =>
           <Text key={key}>{value}</Text>
        )}
        <Button
          title="Start Chatting"
          disabled = { disableInput }
          onPress={() => vetNameBeforeChat()}
        />
        <Text>By using the ZenGreet App, you agree to the terms and conditions.</Text>
      </View>
      <Footer navigation = {navigation}/>
    </Container>
  );
}
