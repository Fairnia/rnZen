import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header({navigation, title}) {
  return (
    <View style={styles.header}>
      <Button
      style = {styles.logo}
      title={title}
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'20 auto',
    padding: '20',
    width:'100%',
    maxWidth:'600px'
  },
  logo:{
    backgroundColor: 'none',
    color:'#247fa3',
    height:'15',
    width:'15',
  }
});
