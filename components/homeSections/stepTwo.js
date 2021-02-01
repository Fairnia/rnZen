import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { ContainerAnim, ColStepTwo, DescriptionText, LeftCol, RightCol, AnimText } from '../../styles/styles'
import * as Animatable from 'react-native-animatable';
import FadeInOut from 'react-native-fade-in-out';

const greetings = [
  "happy",
  "healthy",
  "safe",
]

export default function StepTwo() {
  const [leftTextState, setLeftTextState] = useState('');
  const [visible, setVisible] = useState(false);
  const [greeting, setGreeting] = useState('');

  const fadeDuration = 500;
  let i = 0

  const callNextGreeting = ()=>{
    setTimeout(()=>{
      setVisible(false);
    }, 2500);

    setTimeout(()=>{
      if(greetings.length - 1 == i) {
        i = 0;
      }else{
        i++;
      }
      callGreeting();
      console.log('settimeout 8000')
    }, 3000);
  }

  const callGreeting = () =>{
    console.log('called from mommma! ', greetings.length, i)
      setGreeting(greetings[i]);
      setVisible(true);
      callNextGreeting();
  }

  useEffect(() => {
    callGreeting();
  }, []);

  const leftBall = {
    0:{
      width: 50,
      height: 50
      },
    .10:{
      width: 55,
      height: 55
    },
    .20:{
      width: 50,
      height: 50
    },
    .30:{
      width: 55,
      height: 55
    },
    .40:{
      width: 50,
      height: 50
    },
    1:{
      width: 50,
      height: 50
    }
  }

  const rightBall = {
    0:{
      width: 50,
      height: 50
      },
    .50:{
      width: 50,
      height: 50
      },
    .60:{
      width: 55,
      height: 55
    },
    .70:{
      width: 50,
      height: 50
    },
    .80:{
      width: 55,
      height: 55
    },
    .90:{
      width: 50,
      height: 50
    },
    1:{
      width: 50,
      height: 50
    }
  }

  const rightText ={
    0:{
      opacity:0
    },
    .63:{
      opacity:0
    },
    .64:{
      opacity:1
    },
    .84:{
      opacity:1
    },
    .85:{
      opacity:0
    }
  }

  const leftText ={
    0:{
      opacity:0
    },
    .43:{
      opacity:0
    },
    .44:{
      opacity:1
    },
    .64:{
      opacity:1
    },
    .65:{
      opacity:0
    }
  }

  return (
    <View>
      <ContainerAnim>
        <LeftCol>
          <Text style={styles.AnimText}>May you be</Text>
          <FadeInOut visible={visible} duration={fadeDuration}>
            <Text style={styles.AnimText}>{greeting}</Text>
          </FadeInOut>
          <View style={styles.BallContainer} >
            <Animatable.View style={styles.Ball} animation={leftBall} duration={2000} iterationDelay={1000} iterationCount="infinite" easing="ease-out" ></Animatable.View>
          </View>
        </LeftCol>
        <RightCol>
          <Text style={styles.AnimText}>May you be</Text>
          <FadeInOut visible={visible} duration={fadeDuration}>
            <Text style={styles.AnimText}>{greeting}</Text>
          </FadeInOut>
          <View style={styles.BallContainer} >
            <Animatable.View style={styles.Ball} animation={rightBall} duration={2000} iterationCount="infinite" iterationDelay={1000}  easing="ease-out"></Animatable.View>
          </View>
        </RightCol>
      </ContainerAnim>
      <DescriptionText>You'll be prompted to offer each other kind greetings</DescriptionText>
    </View>
  );
}

// <Text style={styles.AnimText} >May you be happy</Text>
const styles = StyleSheet.create({
  Ball: {
    width:50,
    height: 50,
    margin: 25,
    backgroundColor: '#247fa3',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginTop: 15,
  },
  BallContainer:{
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 65,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 45,
  },
  AnimText:{
    color: '#247fa3',
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
  }
});
