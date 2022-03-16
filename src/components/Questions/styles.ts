import styled from 'styled-components/native'

export const Container = styled.ScrollView`
    flex: 1;
    background: #FFF;
    padding: 16px;
`

export const SubContainer = styled.ScrollView`
    margin-top: 20px;
    margin-bottom: 50px;
`

export const QuestionContainer = styled.TouchableOpacity`
    background:  #004AAD;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Question = styled.Text`
    color: #FFF;
    font-size: 20px;
    width: 80%;
    font-weight: bold;
`

export const AnswerContainer = styled.View`
    border-width: 1;
    background: #EEEEEE;
    border-color: #004AAD;
    padding: 10px;
`

export const Answer = styled.Text`
    font-size: 16px;
    margin-top: 10px;
`

export const AdContainer = styled.View`
    height: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
    background: transparent
`
