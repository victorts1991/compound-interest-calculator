import styled from 'styled-components/native'

export const Container = styled.View`
`

export const ContainerIcon = styled.View`
    border-radius: 32px;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #C3272B;
    width: 100%;
`

export const FancyAlertText = styled.Text`
    margin-top: -10px;
`

export const Button = styled.TouchableOpacity`
    margin: 30px 5px 10px 5px;
    height: 50px;
    justify-content: center;
    border-radius: 15px;
    background: #C3272B;
    width: 100%;
    elevation: 5;
`

export const ButtonLabel = styled.Text`
    color: #FFF
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`