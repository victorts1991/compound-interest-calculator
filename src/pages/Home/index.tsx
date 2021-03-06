import React, { useState, useEffect, useRef } from 'react'
import { Linking, Share } from 'react-native'
import { FloatingAction } from "react-native-floating-action"

import { TextInputMask } from 'react-native-masked-text'
import { CalculateCompoundInterest } from '../../utils/CalculateCompoundInterest/CalculateCompoundInterest'
import { FieldRadio } from '../../components/FieldRadio'
import { Header } from '../../components/Header'
import { Results } from '../../components/Results'
import { CustomAlert } from '../../components/CustomAlert'
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
            setAlertText('O campo valor inicial ?? obrigat??rio.')
            return false
        }
    
        if(monthlyInvestment.length === 0){
            setAlertText('O campo aporte mensal ?? obrigat??rio.')
            return false
        }
    
        if(interestRate.length === 0){
            setAlertText('O campo taxa de juros ?? obrigat??rio.')
            return false
        }

        if(interestRatePeriod !== 'month' && interestRatePeriod !== 'year') {
            setAlertText('?? necess??rio definir se a taxa de juros ?? mensal ou anual.')
            return false
        }
        
        if(
            (interestRatePeriod === 'month' && stringThisScreenToFloat(interestRate) > 1200)
            || 
            (interestRatePeriod === 'year' && stringThisScreenToFloat(interestRate) > 100)
        ){
            setAlertText('Voc?? definiu uma taxa de juros muito grande, por favor defina uma menor.')
            return false
        }
    
        if(period.length === 0){
            setAlertText('O campo per??odo ?? obrigat??rio.')
            return false
        }

        if(investmentTimeType !== 'month' && investmentTimeType !== 'year') {
            setAlertText('?? necess??rio definir se o per??odo ?? mensal ou anual.')
            return false
        }
        
        
        if(
            (investmentTimeType === 'month' && stringThisScreenToFloat(period) > 1200)
            || 
            (investmentTimeType === 'year' && stringThisScreenToFloat(period) > 100)
        ){
            setAlertText('Voc?? definiu um per??odo muito grande, por favor defina um menor.')
            return false
        }
      
        if(stringThisScreenToFloat(initialValue) > 1000000000){
            setAlertText('Voc?? definiu um valor inicial muito grande, por favor defina um menor.')
            return false
        }
    
        if(stringThisScreenToFloat(monthlyInvestment) > 1000000000){
            setAlertText('Voc?? definiu um aporte mensal muito grande, por favor defina um menor.')
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
                      testID={'initial-value'}
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
                      testID={'interest-rate'}
                      onChangeText={text => setInterestRate(text)}
					/>
                    <TextInputMask
	              		style={textInputMaskStyle}
                        type={'only-numbers'}
                        placeholder={ 'Per??odo' }
                        placeholderTextColor={'#000'}
                        value={period}
                        testID={'period'}
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
                      testID={'monthly-investment'}
                      onChangeText={text => setMonthlyInvestment(text)}
					/>
                    <RadioFormContainer>
                        <FieldRadio 
                            radioProps={[
                                {label: '% a.m  ', value: 'month'},
                                {label: '% a.a', value: 'year'},
                            ]}
                            testID={'interest-rate-period'}
                            onPress={(value) => setInterestRatePeriod(value)}
                            isSelected={interestRatePeriod}
                        />
                    </RadioFormContainer>
                    <RadioFormContainer>
                        <FieldRadio 
                            radioProps={[
                                {label: 'm??s(es)  ', value: 'month'},
                                {label: 'ano(s)', value: 'year'},
                            ]}
                            testID={'investment-time-type'}
                            onPress={(value) => setInvestmentTimeType(value)}
                            isSelected={investmentTimeType}
                        />
                    </RadioFormContainer>
                </RightColumn>
            </Content>
            <Footer>
                <Button testID={'button-calculate'} onPress={() => send()}>
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
                text: "Indique para Algu??m",
                icon: require("../../assets/images/share-icon.png"),
                name: "btn-share-app"
            }
          ]}
          onPressItem={(name) => {
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
        
        <CustomAlert alertVisible={alertVisible} setAlertVisible={setAlertVisible} text={alertText}/>

      </>
    )
}  
