import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Footer({navigation}) {
  return (
    <View style={styles.footer}>
      <Text>Copyright 2020 ZenGreet</Text>
      <Button
      title="Terms"
      onPress={() => navigation.navigate('Terms')}
      />
      <Button
      title="Privacy"
      onPress={() => navigation.navigate('Privacy')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
    border:"#939799 1px solid",
    alignItems: 'center',
    justifyContent: 'center',
    margin:'20',
    padding: '20',
  },
});
