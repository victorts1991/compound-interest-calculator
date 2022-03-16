import React, { useState } from 'react'
import { FloatingAction } from "react-native-floating-action"
import { View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import { FieldRadio } from '../FieldRadio'
import { Header } from '../Header'
import { Results } from '../Results'
import { Container, Content, LeftColumn, RightColumn, RadioFormContainer, Button, ButtonLabel, Footer } from './styles'

const textInputMaskStyle = {
    marginTop: 20, 
    borderWidth: 1, 
    padding: 4, 
    width: '100%',
    height: 40,
    color: '#000'
}

export function Home () {

    const [initialValue, setInitialValue] = useState('')
    const [interestRate, setInterestRate] = useState('')
    const [period, setPeriod] = useState('')
    const [monthlyInvestment, setMonthlyInvestment] = useState('')
    const [interestRatePeriod, setInterestRatePeriod] = useState('')
    const [investmentTimeType, setInvestmentTimeType] = useState('')

    return (
        <>
        <Container>
            <Header title="Calculadora de Juros Compostos" />
            <Content>
                <LeftColumn>
                    <TextInputMask
	              	  style={textInputMaskStyle}
                      type={'money'}
                      placeholder={ 'Valor Inicial' }
                      placeholderTextColor={'#000'}
                      value={initialValue}
                      onChangeText={text => setInitialValue(text)}
					/>
                    <TextInputMask
	              	  style={textInputMaskStyle}
                      type={'money'}
                      options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: ''
                      }}
                      placeholder={ 'Taxa de Juros' }
                      placeholderTextColor={'#000'}
                      value={interestRate}
                      onChangeText={text => setInterestRate(text)}
					/>
                    <TextInputMask
	              		style={textInputMaskStyle}
                        type={'only-numbers'}
                        placeholder={ 'Período' }
                        placeholderTextColor={'#000'}
                        value={period}
                        onChangeText={text => setPeriod(text)}
					/>
                </LeftColumn>
                <RightColumn>
                    <TextInputMask
	              	  style={textInputMaskStyle}
                      type={'money'}
                      placeholder={ 'Aporte Mensal' }
                      placeholderTextColor={'#000'}
                      value={monthlyInvestment}
                      onChangeText={text => setMonthlyInvestment(text)}
					/>
                    <RadioFormContainer>
                        <FieldRadio 
                            radioProps={[
                                {label: '% a.m  ', value: 'month'},
                                {label: '% a.a', value: 'year'},
                            ]}
                            onPress={(value) => setInterestRatePeriod(value)}
                            isSelected={interestRatePeriod}
                        />
                    </RadioFormContainer>
                    <RadioFormContainer>
                        <FieldRadio 
                            radioProps={[
                                {label: 'mês(es)  ', value: 'month'},
                                {label: 'ano(s)', value: 'year'},
                            ]}
                            onPress={(value) => setInvestmentTimeType(value)}
                            isSelected={investmentTimeType}
                        />
                    </RadioFormContainer>
                </RightColumn>
            </Content>
            <Footer>
                <Button>
                    <ButtonLabel>CALCULAR</ButtonLabel>
                </Button>

                <Results />
            </Footer>
        </Container>
        
        <FloatingAction
          actions={[
            {
              text: "Avaliar o App",
              icon: require("../../assets/images/star-icon.png"),
              name: "btn-share-app"
            },
            {
                text: "Indique para Alguém",
                icon: require("../../assets/images/share-icon.png"),
                name: "btn-share-app"
            }
          ]}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          overlayColor={'transparent'}
        />
      </>
    )
}  