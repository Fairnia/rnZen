import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { Container, HomeContent, BannerView, Banner, BannerContent, HomeStartButton, HomeStartCircle, HomeStartText, HomeDescription, DescriptionHeader, DescriptionText, ContainerAnim, RightCol, LeftCol, Ball } from '../../styles/styles'
import * as Animatable from 'react-native-animatable';
import Header from '../header'
import Footer from '../footer'
import StepOne from '../homeSections/stepOne'
import StepTwo from '../homeSections/stepTwo'
import StepThree from '../homeSections/stepThree'
import StepFour from '../homeSections/stepFour'

const DATA = [
  {
    id: 'hs1'
  },
  {
    id: 'hs2'
  },
  {
    id: 'hs3'
  },
  {
    id: 'hs4'
  }
];

export default function HomeScreen({navigation}) {
  const renderItem = ({ item }) => {
    if (item.id == 'hs1') {
      return <StepOne />;
    }else if(item.id == 'hs2'){
      return <StepTwo />;
    }else if(item.id == 'hs3'){
      return <StepThree />;
    }else if(item.id == 'hs4'){
      return <StepFour />;
    }
  }


  return (
    <Container>
      <Header navigation = {navigation}/>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


    </Container>
  );
}
