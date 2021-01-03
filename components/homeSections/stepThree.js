import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { ContainerAnim, RightCol, LeftCol, DescriptionText } from '../../styles/styles'
import * as Animatable from 'react-native-animatable';

export default function StepThree() {
  const rightBall = {
    0:{
      opacity: .25,
      translateX: 100,
      translateY: 0,
    },
    .3:{
      opacity: 1,
      translateX: 10,
      translateY: 0,
    },
    .60:{
      translateX: 10,
      translateY: 0,
    },
    .65:{
      translateX: 10,
      translateY: -7,
    },
    .70:{
      translateY: 0,
    },
    .75:{
      translateY: -7,
    },
    .80:{
      translateX: 10,
      translateY: 0,
    },
    1:{
      translateX: 10,
      translateY: 0,
    }
  }

  const leftBall = {
    0:{
      opacity: .25,
      translateX: -100,
      translateY: 0,
    },
    .3:{
      opacity: 1,
      translateX: -10,
      translateY: 0,
    },
    .4:{
      translateX: -10,
      translateY: 0,
    },
    .45:{
      translateX: -10,
      translateY: -7,
    },
    .50:{
      translateY: 0,
    },
    .55:{
      translateY: -7,
    },
    .60:{
      translateX: -10,
      translateY: 0,
    },
    1:{
      translateX: -10,
      translateY: 0,
    }
  }
  return (
    <View>
      <ContainerAnim>
        <LeftCol>
          <View style={styles.Ball} ></View>
        </LeftCol>
        <RightCol>
          <View style={styles.Ball} ></View>
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
