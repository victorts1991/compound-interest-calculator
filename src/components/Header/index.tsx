import React from 'react'
import { Image } from 'react-native'
import { Container, Title } from './styles'

interface IHeader {
    title: string;
}

export function Header ({title}: IHeader) {
    return (
        <Container>
            <Image 
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10
                }}
                source={require('../../assets/images/icon.png')} 
            />
            <Title>{ title }</Title>
        </Container>
    )
}