import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, Alert} from 'react-native';
import Header from '../header'
import Footer from '../footer'

export default function HomeScreen({navigation}) {
  const [displayName, setDisplayName] = React.useState('Human');
  const [nameAcceptable, setnameAcceptable] = React.useState(false);
  const vetNameBeforeChat = () =>{
    console.log('hello from vetname')
    navigation.navigate('Chat',{
      displayName: {displayName}
    })
  }
  return (
    <View style={styles.container}>
      <Header navigation = {navigation}/>
      <View >
        <Text>Welcome to ZenGreet</Text>

          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , paddingLeft:'5px'}}
            onChangeText={text => setDisplayName(text)}
            value={displayName}
          />
        <Button
        title="Start Chatting"
        onPress={() => vetNameBeforeChat()}
        />
      </View>
      <Footer navigation = {navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '600px',
    margin: 'auto',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    border:"#939799 1px solid",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});












// onPress={() => navigation.navigate('Chat',{
//   displayName: {displayName}
// })}
