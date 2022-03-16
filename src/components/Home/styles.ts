import styled from 'styled-components/native'

/*<ScrollView 
		      	style={{padding: 20}}
          		ref='_scrollView'>*/

export const Container = styled.ScrollView`
    flex: 1;
    background: #FFF;
    padding: 16px;
`

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    max-height: 220px;
`

export const LeftColumn = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 10px;
    max-height: 200px;
    width: 50%;
`
export const RightColumn = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 10px;
    max-height: 200px;
    width: 50%;
`

export const RadioFormContainer = styled.View`
    padding-top: 5px;
    height: 40px;
    justify-content: center;
`

export const Footer = styled.View`
    flex: 1;
`

export const Button = styled.TouchableOpacity`
    margin: 30px 5px 10px 5px;
    height: 50px;
    justify-content: center;
    border-radius: 15px;
    background: #48B050;
    elevation: 5;
`

export const ButtonLabel = styled.Text`
    color: #FFF
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`