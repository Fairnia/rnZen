import React, { useState, useContext } from 'react';
import { UserContext } from '../../App'
import { Text, View, Button, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { Container, HomeContent, BannerView, Banner, BannerContent, HomeStartButton, HomeStartCircle, HomeStartText, HomeDescription, DescriptionHeader, DescriptionText } from '../../styles/styles'

export default function HomeBanner({ navigation }) {

  const { username } = useContext(UserContext);

  return (
    <View>
      <Banner source={require('../../assets/banner1.png')} resizeMode={'cover'} style={{width: 595, height: 400}}>

        {username !== '' &&
        <View>
          <Text>Welcome back</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Username')}><Text>{username}</Text></TouchableOpacity>
        </View>
        }

        <HomeStartButton
          onPress={() => username === '' ?
            navigation.navigate('Username')
           : navigation.navigate('Chat') }
        >
          <HomeStartCircle>
          <HomeStartText>Start Greeting</HomeStartText>
          </HomeStartCircle>

        </HomeStartButton>
      </Banner>
    </View>
  );
}
