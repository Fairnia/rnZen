import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { ContainerAnim, RightCol, LeftCol, DescriptionText } from '../../styles/styles'
import * as Animatable from 'react-native-animatable';

export default function StepFour() {
  // const [rightText, setRightText] = setState('');
  // const [leftText, setLeftText] = setState('');

  const leftBall = {
    0:{
      translateY: 0,
      opacity:0
    },
    .01:{
      opacity:1,
    },
    .08:{
      backgroundColor: 'rgba(36, 127, 163, 1)',
      translateY: 0,
    },
    .10:{
      translateY: -10,
    },
    .12:{
      translateY: 0,
    },
    .14:{
      translateY: -10,
    },
    .16:{
      translateY: 0,
    },

    .73:{
      translateY: 0,
    },
    .755:{
      translateY: -10,
    },
    .78:{
      translateY: 0,
    },
    .805:{
      translateY: -10,
    },
    .83:{
      translateY: 0,
    },
    .99:{
      backgroundColor: 'rgba(36, 127, 163, 1)',
      opacity: 1,
    },
    1:{
      opacity: 0,
      translateY: 0,
    }
  }

  const rightBall = {
    0:{
      opacity:0
    },
    .01:{
      opacity:1,
      translateY: 0,
      translateX: 0,
      backgroundColor: 'rgba(36, 127, 163, 1)'

    },
    .2:{
      translateY: 0,
    },
    .225:{
      translateY: -10,
    },
    .25:{
      translateY: 0,
    },
    .275:{
      translateY: -10,
    },
    .3:{
      translateY: 0,
    },
    .33:{
      translateX: 0,
      opacity:1
    },
    .45:{
      translateX: 100,
      opacity:0,
      backgroundColor: 'rgba(36, 127, 163, 1)'
    },
    .48:{
      translateX: 100,
      opacity:0,
      backgroundColor: 'rgba(251,251,251, 0.8)'
    },
    .6:{
      translateY: 0,
      translateX: 0,
      opacity:1,
      backgroundColor:"rgba(244, 179, 80, 1)"
    },
    .61:{
      translateY: 0,
    },
    .635:{
      translateY: -10,
    },
    .66:{
      translateY: 0,
    },
    .685:{
      translateY: -10,
    },
    .71:{
      translateY: 0,
    },


    .99:{
      backgroundColor:"rgba(244, 179, 80, 1)",
      opacity: 1,
    },
    1:{
      opacity: 0,
      translateX: 0,
      translateY: 0
    }
  }


  const rightText ={
    0:{
      opacity:0
    },
    .21:{
      opacity:0
    },
    .22:{
      opacity:1
    },
    .32:{
      opacity:1
    },
    .33:{
      opacity:0
    },

    .59:{
      opacity:0
    },
    .6:{
      opacity:1
    },
    .72:{
      opacity:1
    },
    .73:{
      opacity:0
    },

  }
  const leftText ={
    0:{
      opacity:0
    },
    .105:{
      opacity:1
    },
    .22:{
      opacity:1
    },
    .23:{
      opacity:0
    },

    .72:{
      opacity:0
    },
    .73:{
      opacity:1
    },
    .85:{
      opacity:1
    },
    .86:{
      opacity:0
    },

  }
  return (
    <View>
      <ContainerAnim>
        <LeftCol>
          <Animatable.Text style={styles.AnimText} animation={leftText} duration={9000} iterationDelay={1000} iterationCount={12} easing="linear">Lovely meeting you! Goodbye!</Animatable.Text>
          <Animatable.View style={styles.Ball} animation={leftBall} duration={9000} iterationDelay={1000} iterationCount={12} easing="linear"></Animatable.View>
        </LeftCol>
        <RightCol>
          <Animatable.Text style={styles.AnimText} animation={rightText} duration={9000} iterationDelay={1000} iterationCount={12} easing="linear">You too! Bye!</Animatable.Text>
          <Animatable.View style={styles.Ball} animation={rightBall}  duration={9000} iterationDelay={1000} iterationCount={12} easing="linear"></Animatable.View>
        </RightCol>
      </ContainerAnim>
      <DescriptionText>You'll say goodbye and then be matched up with someone else. Repeat as many times as you like :)</DescriptionText>
    </View>
  );
}

const styles = StyleSheet.create({
  Ball: {
    width:50,
    height: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  AnimText:{
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
  }
});
