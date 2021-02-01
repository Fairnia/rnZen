import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { Container, HomeContent, BannerView, Banner, BannerContent, HomeStartButton, HomeStartCircle, HomeStartText, HomeDescription, DescriptionHeader, DescriptionText, ContainerAnim, RightCol, LeftCol, Ball } from '../../styles/styles'
import * as Animatable from 'react-native-animatable';
import Header from '../header'
import Footer from '../footer'
import HomeBanner from '../homeSections/banner'
import StepOne from '../homeSections/stepOne'
import StepTwo from '../homeSections/stepTwo'
import StepThree from '../homeSections/stepThree'
import StepFour from '../homeSections/stepFour'


const DATA = [
  {
    id:'hheader'
  },
  // {
  //   id:'hbanner'
  // },
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
  },
  {
    id:'hfooter'
  }
];

export default function HomeScreen({navigation}) {
  //check local storage if has username
  const renderItem = ({ item }) => {
    if(item.id == 'hheader'){
      return <Header navigation = {navigation} />
    }else if(item.id == 'hbanner'){
      return <HomeBanner navigation = {navigation} />;
    }else if (item.id == 'hs1') {
      return <StepOne />;
    }else if(item.id == 'hs2'){
      return <StepTwo />;
    }else if(item.id == 'hs3'){
      return <StepThree />;
    }else if(item.id == 'hs4'){
      return <StepFour />;
    }else if(item.id == 'hfooter'){
      return <Footer navigation = {navigation} />
    }
  }

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 95
  }

  return (
    <Container>
        <FlatList
          data={DATA}
          initialNumToRender = {2}
          ViewabilityConfig = {viewabilityConfig}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </Container>
  );
}
