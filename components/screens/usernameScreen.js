import React, {useState} from 'react';
import { Text, View, Button, TextInput, Image, TouchableHighlight, Alert} from 'react-native'
import {Container} from '../../styles/styles'
import Header from '../header'
import Footer from '../footer'

export default function UsernameScreen({navigation}) {
  const [displayName, setDisplayName] = React.useState('Human');
  const [nameAcceptable, setnameAcceptable] = React.useState(false);
  const vetNameBeforeChat = () =>{
    console.log('hello from vetname')
    navigation.navigate('Chat',{
      displayName: {displayName}
    })
  }
  return (
    <Container>
      <Header navigation = {navigation}/>
      <View >
        <Text>Select a username</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 , paddingLeft:'5%'}}
          onChangeText={text => setDisplayName(text)}
          value={displayName}
        />
        <Button
        title="Start Chatting"
        onPress={() => vetNameBeforeChat()}
        />
      </View>
      <Footer navigation = {navigation}/>
    </Container>
  );
}
