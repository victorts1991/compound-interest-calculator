import React, { useEffect } from 'react'
import { EvaluationRequest } from '../../utils/EvaluationRequest'
import { Container, Teste } from './styles'


export function Home () {

    useEffect(() => {
        EvaluationRequest()
    }, [])

    return (
        <Container>
            <Teste>home</Teste>
        </Container>
    )
}  