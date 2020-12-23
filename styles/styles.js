import styled from 'styled-components/native'

export const Container = styled.View`
  width: 600px;
  margin: auto;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  border:#939799 1px solid;
`

export const FooterContainer = styled.View`
  background-color: #fff;
  width:100%;
  border: #939799 1px solid;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const FooterTNP = styled.View`
  flex-direction: row;
  padding: 10px 0 0 0 ; 
`
export const FooterButton = styled.TouchableOpacity`
  background: transparent;
  color:#247fa3;
  font-size: 45px;
  padding: 0 5px;
`
