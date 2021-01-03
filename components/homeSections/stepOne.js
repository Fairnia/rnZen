import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { ContainerAnim, RightCol, LeftCol, DescriptionText } from '../../styles/styles'
import * as Animatable from 'react-native-animatable';

export default function StepOne() {
  const rightBall = {
    0:{
      opacity: 0,
      translateX: 100,
      translateY: 0,
    },
    .3:{
      opacity: 1,
      translateX: 10,
      translateY: 0,
    },
    .5:{
      translateX: 10,
      translateY: 0,
    },
    .53:{
      translateX: 10,
      translateY: -7,
    },
    .56:{
      translateY: 0,
    },
    .59:{
      translateY: -7,
    },
    .62:{
      translateX: 10,
      translateY: 0,
    },
    1:{
      translateX: 10,
      translateY: 0,
    }
  }

  const rightText ={
    0:{
      opacity:0
    },
    .53:{
      opacity:0
    },
    .54:{
      opacity:1
    },
    .7:{
      opacity:1
    }
  }

  const leftBall = {
    0:{
      opacity: 0,
      translateX: -100,
      translateY: 0,
    },
    .3:{
      opacity: 1,
      translateX: -10,
      translateY: 0,
    },
    .35:{
      translateX: -10,
      translateY: 0,
    },
    .37:{
      translateX: -10,
      translateY: -7,
    },
    .40:{
      translateY: 0,
    },
    .43:{
      translateY: -7,
    },
    .47:{
      translateX: -10,
      translateY: 0,
    },
    1:{
      translateX: -10,
      translateY: 0,
    }
  }

  const leftText ={
    0:{
      opacity:0
    },
    .38:{
      opacity:0
    },
    .39:{
      opacity:1
    },
    .5:{
      opacity:1
    }
  }
  return (
    <View>
      <ContainerAnim>
        <LeftCol>
          <Animatable.Text style={styles.AnimText} animation={leftText} duration={5000} iterationDelay={2000} iterationCount={3} easing="linear">Hey</Animatable.Text>
          <Animatable.View style={styles.Ball} animation={leftBall} duration={5000} iterationDelay={2000} iterationCount={3} easing="linear"></Animatable.View>
        </LeftCol>
        <RightCol>
          <Animatable.Text style={styles.AnimText} animation={rightText} duration={5000} iterationDelay={2000} iterationCount={3} easing="linear">Yo</Animatable.Text>
          <Animatable.View style={styles.Ball} animation={rightBall}  duration={5000} iterationDelay={2000} iterationCount={3} easing="linear"></Animatable.View>
        </RightCol>
      </ContainerAnim>
      <DescriptionText>Through video, you'll meet your partner and introduce yourselves</DescriptionText>
    </View>
  );
}

const styles = StyleSheet.create({
  Ball: {
    width:50,
    height: 50,
    backgroundColor: '#247fa3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginTop: 15,
  },
  AnimText:{
    fontSize: 28,
    marginLeft: 15,
    marginRight: 15,
  }
});
