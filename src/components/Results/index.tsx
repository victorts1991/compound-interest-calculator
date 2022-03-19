import React from 'react'
import { ICalculateCompoundInterestResponse } from '../../utils/CalculateCompoundInterest/interfaces'
import { Container, BigTitle, SubContainer, SmallTitle, VeryBigTitle } from './styles'

export function Results (data: ICalculateCompoundInterestResponse) {
    return (
        <Container>
            <BigTitle>Resultado</BigTitle>
            <SubContainer>
                <SmallTitle>Total Investido</SmallTitle>
                <VeryBigTitle testID={'total-invested'}>{ data.totalInvested }</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Total em Juros</SmallTitle>
                <VeryBigTitle testID={'total-in-interest'}>{ data.totalInInterest }</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Total Acumulado</SmallTitle>
                <VeryBigTitle testID={'amount-with-interest'}>{ data.amountWithInterest }</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Rendimento de Juros no Último Mês</SmallTitle>
                <VeryBigTitle testID={'interest-amount-in-the-last-month'}>{ data.interestAmountInTheLastMonth }</VeryBigTitle>
            </SubContainer>
        </Container>
    )
}
