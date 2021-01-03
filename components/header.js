import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { HeaderBar, ZenGreet, HeaderHome } from '../styles/styles'
import Logo from './logo'

export default function Header({navigation, title}) {
  return (
    <HeaderBar>
      <HeaderHome onPress={() => navigation.navigate('Home')} >
      <Logo style={{ width: 40, height: 40 }}/>
        <ZenGreet>ZenGreet</ZenGreet>
      </HeaderHome>
    </HeaderBar>
  );
}
