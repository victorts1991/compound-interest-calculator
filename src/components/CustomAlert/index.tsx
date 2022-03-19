import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { FancyAlert } from 'react-native-expo-fancy-alerts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, ContainerIcon, FancyAlertText, Button, ButtonLabel } from './styles'

interface IAlert {
    alertVisible: boolean;
    setAlertVisible: (value: boolean) => void;
    text: string
}

export function CustomAlert ({ alertVisible, setAlertVisible, text }: IAlert) {
    return (
        <Container>
            <FancyAlert
                visible={alertVisible}
                icon={
                    <ContainerIcon>
                        <MaterialCommunityIcons name="exclamation" color={'white'} size={40} />
                    </ContainerIcon>
                }
                style={{ backgroundColor: 'white' }} 
                onRequestClose={() => {setAlertVisible(false)} } 
                >
                    <FancyAlertText>{ text }</FancyAlertText>
                    <Button onPress={() =>  {setAlertVisible(false)}}>
                        <ButtonLabel>OK</ButtonLabel>
                    </Button>
            </FancyAlert>
        </Container>
    )
}
