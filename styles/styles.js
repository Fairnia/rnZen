import styled from 'styled-components/native';
import bgImg from '../assets/banner1.png';

//  move header and footer css to styles.js
//  move all other css out of components


const bannerGradient = 'background: linear-gradient(180deg, rgba(46,92,111,1) 0%, rgba(23,99,130,1) 0%, rgba(216,223,226,1) 89%, rgba(255,255,255,1) 100%);'

const signatureColor = '#247fa3';
const signatureFontFamily = 'Roboto_400Regular';

export const Container = styled.View`
  width:100%;
  max-width: 600px;
  margin: auto;
  flex: 1;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ffffff;
`

export const HeaderBar = styled.View`
  width:100%;
  padding:10px;
  border-top-color: #ccc;
  border-top-width: 1px;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`
export const HeaderHome = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ZenGreet = styled.Text`
  font-size: 24px;
  color: ${signatureColor};
  padding-left: 5px;
`

export const HomeContent = styled.View`
  flex-direction: column;
  /* overflow-y: hidden; */
`


export const BannerView = styled.View`

`

export const Banner = styled.ImageBackground`
  width:100%;
  max-width:590px;
  height: 100%;
  max-height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeStartButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  background: rgba(255, 255, 255,0.3);
  width: 225px;
  height: 225px;
  border-top-right-radius: 300px;
  border-top-left-radius: 300px;
  border-bottom-right-radius: 300px;
  border-bottom-left-radius: 300px;
  `

export const HomeStartCircle = styled.View`
    background: rgba(255, 255, 255,1);
    border-top-right-radius: 300px;
    border-top-left-radius: 300px;
    border-bottom-right-radius: 300px;
    border-bottom-left-radius: 300px;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    padding: 0 25px;
    height: 200px;
    width:200px;
    text-align: center;
  `

export const HomeStartText = styled.Text`
  color: ${signatureColor};
  text-align:center;
  font-size: 22px;
`

export const HomeDescription = styled.Text`
  color: ${signatureColor};
  display:flex;
  flex-direction: column;
  align-items:center;
  text-align:center;
  font-size: 22px;
  justify-content: center;
`

export const DescriptionHeader = styled.Text`
  color: ${signatureColor};
  text-align:center;
  padding: 40px 5px 25px;
  font-size: 28px;
`

export const ContainerAnim = styled.View`
  width:300px;
  height: 125px;
  display:flex;
  flex-direction: row;
  align-self: center;
  padding-bottom: 20px;
  margin-top: 20px;
`
export const RightCol = styled.View`
  display:flex;
  flex-direction: column;
  flex:1;
  align-items: flex-start;
  justify-content: flex-end;
`
export const LeftCol = styled.View`
  display:flex;
  flex-direction: column;
  flex:1;
  text-align:center;
  align-items: flex-end;
  justify-content: flex-end;
`
export const ColStepTwo = styled.View`
  display:flex;
  flex-direction: column;
  flex:1;
  align-items: center;
  justify-content: center;
`
export const AnimText = styled.Text`
  padding: 15px 5px 5px;
  color:#247fa3;
  font-size: 25px;
  text-align: center;
`
export const DescriptionText = styled.Text`
  color: ${signatureColor};
  text-align:center;
  padding: 5px;
  font-size: 18px;
  margin:0 auto 40px;
  max-width:350px;
`

export const FooterContainer = styled.View`
  background-color: #fff;
  width:100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const FooterTNP = styled.View`
  flex-direction: row;
  padding: 10px 0;
`
export const FooterButton = styled.TouchableOpacity`
  background: transparent;
  color: ${signatureColor};
  font-size: 45px;
  padding: 0 5px;
`
