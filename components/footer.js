import React from 'react';
import { Text } from 'react-native';
import { FooterContainer, FooterButton, FooterTNP } from '../styles/styles'

export default function Footer({navigation}) {
  return (
    <FooterContainer>
      <Text>Copyright 2020 ZenGreet</Text>
      <FooterTNP>
      <FooterButton
        onPress={() => navigation.navigate('Terms')}
      >
        <Text>Terms</Text>
      </FooterButton>
      <FooterButton
        onPress={() => navigation.navigate('Privacy')}
      >
        <Text>Privacy</Text>
      </FooterButton>
      </FooterTNP>
    </FooterContainer>
  );
}
