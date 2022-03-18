import React from 'react'
import { ICalculateCompoundInterestResponse } from '../../utils/CalculateCompoundInterest/interfaces'
import { Container, BigTitle, SubContainer, SmallTitle, VeryBigTitle } from './styles'

export function Results (data: ICalculateCompoundInterestResponse) {
    return (
        <Container>
            <BigTitle>Resultado</BigTitle>
            <SubContainer>
                <SmallTitle>Total Investido</SmallTitle>
                <VeryBigTitle>{ data.totalInvested }</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Total em Juros</SmallTitle>
                <VeryBigTitle>{ data.totalInInterest }</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Total Acumulado</SmallTitle>
                <VeryBigTitle>{ data.amountWithInterest }</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Rendimento de Juros no Último Mês</SmallTitle>
                <VeryBigTitle>{ data.interestAmountInTheLastMonth }</VeryBigTitle>
            </SubContainer>
        </Container>
    )
}
