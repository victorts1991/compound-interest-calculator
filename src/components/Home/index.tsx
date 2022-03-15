import React, { useState, useEffect } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import RadioForm from 'react-native-simple-radio-button'

import { EvaluationRequest } from '../../utils/EvaluationRequest'
import { Header } from '../Header'
import { Results } from '../Results'
import { Container, Content, LeftColumn, RightColumn, RadioFormContainer, Button, ButtonLabel, Footer } from './styles'

const textInputMaskStyle = {
    marginTop: 20, 
    borderWidth: 1, 
    padding: 4, 
    width: '100%',
    color: '#000'
}

export function Home () {

    const [initialValue, setInitialValue] = useState('')
    const [interestRate, setInterestRate] = useState('')
    const [period, setPeriod] = useState('')
    const [monthlyInvestment, setMonthlyInvestment] = useState('')
    const [interestRatePeriod, setInterestRatePeriod] = useState('')
    const [investmentTimeType, setInvestmentTimeType] = useState('')

    useEffect(() => {
        EvaluationRequest()
    }, [])

    return (
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
                        <RadioForm
                            radio_props={[
                                {label: '% a.m  ', value: 'month'},
                                {label: '% a.a', value: 'year'},
                            ]}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => setInterestRatePeriod(value)}
                        />
                    </RadioFormContainer>
                    <RadioFormContainer>
                        <RadioForm
                            radio_props={[
                                {label: 'mês(es)  ', value: 'month'},
                                {label: 'ano(s)', value: 'year'},
                            ]}
                            initial={0}
                            formHorizontal={true}
                            onPress={(value) => setInvestmentTimeType(value)}
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
    )
}  