import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Header({navigation, title}) {
  return (
    <View style={styles.header}>
    <TouchableOpacity style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
      <Image
        style={{ width: 40, height: 40 }}
        source={require('../assets/logo.svg')}
      />
        <Text style={styles.homeButtonText}>ZenGreet</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'50px',
    maxWidth:'600',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 30,
  },
  logo:{
    height:'15',
    width:'15',
  },
  homeButton:{
    flexDirection:'row',
    margin:'20 auto',
    padding: '20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonText:{
    fontSize: '24px',
    color:'#247fa3',
    paddingLeft:'5px'
  }
});
