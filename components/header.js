import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Button
      style = {styles.logo}
      title="Zengreet"
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    border:"#939799 1px solid",
    alignItems: 'center',
    justifyContent: 'center',
    margin:'20',
    padding: '20',
  },
  logo:{
    backgroundColor: 'none',
    color:'#247fa3'
  }
});
