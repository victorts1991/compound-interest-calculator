import React, { useState, useEffect, useRef } from 'react'
import { Linking, Share } from 'react-native'
import { FloatingAction } from "react-native-floating-action"
import { TextInputMask } from 'react-native-masked-text'
import { CalculateCompoundInterest } from '../../utils/CalculateCompoundInterest/CalculateCompoundInterest'
import { FieldRadio } from '../FieldRadio'
import { Header } from '../Header'
import { Results } from '../Results'
import { Alert } from '../Alert'
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

    const scrollViewRef = useRef<any>(null)

    const [initialValue, setInitialValue] = useState('')
    const [interestRate, setInterestRate] = useState('')
    const [period, setPeriod] = useState('')
    const [monthlyInvestment, setMonthlyInvestment] = useState('')
    const [interestRatePeriod, setInterestRatePeriod] = useState('')
    const [investmentTimeType, setInvestmentTimeType] = useState('')

    const [alertVisible, setAlertVisible] = useState(false)
    const [alertText, setAlertText] = useState('')

    const [calculateCompoundInterestResponse, setCalculateCompoundInterestResponse] = useState({
        totalInvested: '--',
        totalInInterest: '--', 
        amountWithInterest: '--', 
        interestAmountInTheLastMonth: '--'  
    })

    useEffect(() => {
        if(alertText !== ''){
            setAlertVisible(true)
        }
    }, [alertText])

    useEffect(() => {
        if(!alertVisible){
            setAlertText('')
        }
    }, [alertVisible])


    //remove all . in the string then change the , to a . then remove R$ text
    function stringThisScreenToFloat (value: string){
        return parseFloat(value.split('.').join('').replace(',', '.').replace('R$', ''))
    }

    function validate(){
        if(initialValue.length === 0){
            setAlertText('O campo valor inicial é obrigatório.')
            return false
        }
    
        if(monthlyInvestment.length === 0){
            setAlertText('O campo aporte mensal é obrigatório.')
            return false
        }
    
        if(interestRate.length === 0){
            setAlertText('O campo taxa de juros é obrigatório.')
            return false
        }
    
        if(
            (interestRatePeriod === 'month' && stringThisScreenToFloat(interestRate) > 1200)
            || 
            (interestRatePeriod === 'year' && stringThisScreenToFloat(interestRate) > 100)
        ){
            setAlertText('Você definiu uma taxa de juros muito grande, por favor defina uma menor.')
            return false
        }
    
        if(period.length === 0){
            setAlertText('O campo período é obrigatório.')
            return false
        }
        
        if(
            (investmentTimeType === 'month' && stringThisScreenToFloat(period) > 1200)
            || 
            (investmentTimeType === 'year' && stringThisScreenToFloat(period) > 100)
        ){
            setAlertText('Você definiu um período muito grande, por favor defina um menor.')
            return false
        }
      
        if(stringThisScreenToFloat(initialValue) > 1000000000){
            setAlertText('Você definiu um valor inicial muito grande, por favor defina um menor.')
            return false
        }
    
        if(stringThisScreenToFloat(monthlyInvestment) > 1000000000){
            setAlertText('Você definiu um aporte mensal muito grande, por favor defina um menor.')
            return false
        }
        
        return true
    }

    function send() {
        if(validate()){
            const toSend = {
                initialValue: stringThisScreenToFloat(initialValue),
                monthlyInvestment: stringThisScreenToFloat(monthlyInvestment),
                interestRate: stringThisScreenToFloat(interestRate),
                interestRatePeriod: interestRatePeriod,
                period: stringThisScreenToFloat(period),
                investmentTimeType: investmentTimeType
            }
            setCalculateCompoundInterestResponse(CalculateCompoundInterest(toSend))

            scrollViewRef.current?.scrollToEnd({ animated: true })
        }
    }
 
    return (
        <>
        <Container ref={scrollViewRef} >
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
                <Button onPress={() => send()}>
                    <ButtonLabel>CALCULAR</ButtonLabel>
                </Button>

                <Results {...calculateCompoundInterestResponse}/>
            </Footer>
        </Container>
        
        <FloatingAction
          actions={[
            {
              text: "Avaliar o App",
              icon: require("../../assets/images/star-icon.png"),
              name: "btn-rate-app"
            },
            {
                text: "Indique para Alguém",
                icon: require("../../assets/images/share-icon.png"),
                name: "btn-share-app"
            }
          ]}
          onPressItem={name => {
            if(name === 'btn-rate-app'){
                const url = "https://play.google.com/store/apps/details?id=br.com.fiiquedeboa.juroscompostos";
                Linking.canOpenURL(url).then(supported => {
                    if (supported) {
                        return Linking.openURL(url)
                    }
                }).catch(err => {
                })
            }

            if(name === 'btn-share-app'){
                Share.share({
                    message: "https://play.google.com/store/apps/details?id=br.com.fiiquedeboa.juroscompostos"
                })
            }
          }}
          overlayColor={'transparent'}
        />
        
        <Alert alertVisible={alertVisible} setAlertVisible={setAlertVisible} text={alertText}/>

      </>
    )
}  
