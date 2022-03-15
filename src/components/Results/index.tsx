import React from 'react'
import { Text } from 'react-native'

import { Container, BigTitle, SubContainer, SmallTitle, VeryBigTitle } from './styles'

export function Results () {
    return (
        <Container>
            <BigTitle>Resultado</BigTitle>
            <SubContainer>
                <SmallTitle>Total Investido</SmallTitle>
                <VeryBigTitle>--</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Total em Juros</SmallTitle>
                <VeryBigTitle>--</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Total Acumulado</SmallTitle>
                <VeryBigTitle>--</VeryBigTitle>
            </SubContainer>
            <SubContainer>
                <SmallTitle>Rendimento de Juros no Próximo Mês</SmallTitle>
                <VeryBigTitle>--</VeryBigTitle>
            </SubContainer>
        </Container>
    )
}
