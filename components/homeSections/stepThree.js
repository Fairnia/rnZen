import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { ContainerAnim, RightCol, LeftCol, DescriptionText } from '../../styles/styles'
import * as Animatable from 'react-native-animatable';

export default function StepThree() {
  const animBall = {
    0:{
      opacity: 1
    },
    .5:{
      opacity: .55
    },
    .8:{
      opacity: .9
    },
    1:{
      opacity: 1
    }
  }

  return (
    <View>
      <ContainerAnim>
        <LeftCol>
          <Animatable.View style={styles.Ball} animation={animBall} duration={4000} iterationCount="infinite" easing="ease-out"></Animatable.View>
        </LeftCol>
        <RightCol>
          <Animatable.View style={styles.Ball} animation={animBall} duration={4000} iterationCount="infinite" easing="ease-out"></Animatable.View>
        </RightCol>
      </ContainerAnim>
      <DescriptionText>You'll then share a moment of mindful presence</DescriptionText>

    </View>
  );
}

const styles = StyleSheet.create({
  Ball: {
    width:50,
    height: 50,
    margin:15,
    // shadowColor: '#174b65',
    shadowColor: 'yellow',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 35,
    elevation: 1,
    backgroundColor: '#247fa3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  BallShadow:{
    margin: 15,
    shadowColor: '#192841',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 75,
    elevation: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  AnimText:{
    fontSize: 28,
    marginLeft: 15,
    marginRight: 15,
  }
});
