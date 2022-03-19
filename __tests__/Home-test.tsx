import 'react-native'
import React from 'react'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/react-native'
import { Home } from '../src/components/Home'
const { act } = renderer;

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('Home Page', () => {
    it('should not be able to calculate compound interest if fields are not filled or filled correctly', () => {
        const Screen = renderer.create(<Home />)

        const buttonCalculate = Screen.root.findByProps({ testID: 'button-calculate' })
        const totalInvested = Screen.root.findByProps({ testID: 'total-invested' })
        
        //fields
        const initialValue = Screen.root.findByProps({ testID: 'initial-value' })
        const interestRate = Screen.root.findByProps({ testID: 'interest-rate' })
        const period = Screen.root.findByProps({ testID: 'period' })
        const monthlyInvestment = Screen.root.findByProps({ testID: 'monthly-investment' })
        const interestRatePeriodMonth = Screen.root.findByProps({ testID: 'interest-rate-period-input-month' })
        const interestRatePeriodYear = Screen.root.findByProps({ testID: 'interest-rate-period-input-year' })
        const investmentTimeTypeMonth = Screen.root.findByProps({ testID: 'investment-time-type-label-month' })
        const investmentTimeTypeYear = Screen.root.findByProps({ testID: 'investment-time-type-label-year' })

        act(() => {
            buttonCalculate.props.onPress()
        })
        //O campo valor inicial é obrigatório.
        expect(totalInvested.props.children).toEqual('--')

        fireEvent(initialValue, 'onChangeText', '100,00')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //O campo aporte mensal é obrigatório.
        expect(totalInvested.props.children).toEqual('--')

        fireEvent(monthlyInvestment, 'onChangeText', '200,00')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //O campo taxa de juros é obrigatório.
        expect(totalInvested.props.children).toEqual('--')

        fireEvent(interestRate, 'onChangeText', '0,5')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //É necessário definir se a taxa de juros é mensal ou anual.
        expect(totalInvested.props.children).toEqual('--')

        act(() => {
            interestRatePeriodMonth.props.onPress()
        })
        act(() => {
            buttonCalculate.props.onPress()
        })
        //O campo período é obrigatório.
        expect(totalInvested.props.children).toEqual('--')

        fireEvent(period, 'onChangeText', '1')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //É necessário definir se o período é mensal ou anual.
        expect(totalInvested.props.children).toEqual('--')
        
        act(() => {
            investmentTimeTypeMonth.props.onPress()
        })
        fireEvent(interestRate, 'onChangeText', '1201')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //Você definiu uma taxa de juros muito grande, por favor defina uma menor.
        expect(totalInvested.props.children).toEqual('--')

        fireEvent(interestRate, 'onChangeText', '101')
        act(() => {
            interestRatePeriodYear.props.onPress()
        })
        
        act(() => {
            buttonCalculate.props.onPress()
        })
        //Você definiu uma taxa de juros muito grande, por favor defina uma menor 2.
        expect(totalInvested.props.children).toEqual('--')
        
        fireEvent(interestRate, 'onChangeText', '10')
        fireEvent(period, 'onChangeText', '1201')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //Você definiu um período muito grande, por favor defina um menor.
        expect(totalInvested.props.children).toEqual('--')

        act(() => {
            investmentTimeTypeYear.props.onPress()
        })
        fireEvent(period, 'onChangeText', '101')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //Você definiu um período muito grande, por favor defina um menor.
        expect(totalInvested.props.children).toEqual('--')

        fireEvent(period, 'onChangeText', '20')
        fireEvent(initialValue, 'onChangeText', '1000000001')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //Você definiu um valor inicial muito grande, por favor defina um menor.
        expect(totalInvested.props.children).toEqual('--')

        fireEvent(initialValue, 'onChangeText', '100')
        fireEvent(monthlyInvestment, 'onChangeText', '1000000001')
        act(() => {
            buttonCalculate.props.onPress()
        })
        //Você definiu um aporte mensal muito grande, por favor defina um menor.
        expect(totalInvested.props.children).toEqual('--')
        
        fireEvent(monthlyInvestment, 'onChangeText', '200')
        act(() => {
            buttonCalculate.props.onPress()
        })
       
        expect(totalInvested.props.children).not.toEqual('--')
    })
    
    it('should be able to calculate compound interest with month rate', ()=>{
        const Screen = renderer.create(<Home />);

        const buttonCalculate = Screen.root.findByProps({ testID: 'button-calculate' })
        
        //Results
        const totalInvested = Screen.root.findByProps({ testID: 'total-invested' })
        const totalInInterest = Screen.root.findByProps({ testID: 'total-in-interest' })
        const amountWithInterest = Screen.root.findByProps({ testID: 'amount-with-interest' })
        const interestAmountInTheLastMonth = Screen.root.findByProps({ testID: 'interest-amount-in-the-last-month' })
        
        //fields
        const initialValue = Screen.root.findByProps({ testID: 'initial-value' })
        const interestRate = Screen.root.findByProps({ testID: 'interest-rate' })
        const period = Screen.root.findByProps({ testID: 'period' })
        const monthlyInvestment = Screen.root.findByProps({ testID: 'monthly-investment' })
        const interestRatePeriodMonth = Screen.root.findByProps({ testID: 'interest-rate-period-input-month' })
        const investmentTimeTypeMonth = Screen.root.findByProps({ testID: 'investment-time-type-label-month' })

        fireEvent(initialValue, 'onChangeText', '100,00')
        fireEvent(interestRate, 'onChangeText', '0,50')
        fireEvent(period, 'onChangeText', '6')
        fireEvent(monthlyInvestment, 'onChangeText', '300,00')
        act(() => {
            interestRatePeriodMonth.props.onPress()
        })
        act(() => {
            investmentTimeTypeMonth.props.onPress()
        })
        act(() => {
            buttonCalculate.props.onPress()
        })
        expect(totalInvested.props.children).toEqual('R$1.900,00')
        expect(totalInInterest.props.children).toEqual('R$25,69')
        expect(amountWithInterest.props.children).toEqual('R$1.925,69')
        expect(interestAmountInTheLastMonth.props.children).toEqual('R$8,09')
    })

    it('should be able to calculate compound interest with year rate', ()=>{
        const Screen = renderer.create(<Home />);

        const buttonCalculate = Screen.root.findByProps({ testID: 'button-calculate' })
        
        //Results
        const totalInvested = Screen.root.findByProps({ testID: 'total-invested' })
        const totalInInterest = Screen.root.findByProps({ testID: 'total-in-interest' })
        const amountWithInterest = Screen.root.findByProps({ testID: 'amount-with-interest' })
        const interestAmountInTheLastMonth = Screen.root.findByProps({ testID: 'interest-amount-in-the-last-month' })
        
        //fields
        const initialValue = Screen.root.findByProps({ testID: 'initial-value' })
        const interestRate = Screen.root.findByProps({ testID: 'interest-rate' })
        const period = Screen.root.findByProps({ testID: 'period' })
        const monthlyInvestment = Screen.root.findByProps({ testID: 'monthly-investment' })
        const interestRatePeriodYear = Screen.root.findByProps({ testID: 'interest-rate-period-input-year' })
        const investmentTimeTypeYear = Screen.root.findByProps({ testID: 'investment-time-type-label-year' })

        fireEvent(initialValue, 'onChangeText', '100,00')
        fireEvent(interestRate, 'onChangeText', '0,50')
        fireEvent(period, 'onChangeText', '6')
        fireEvent(monthlyInvestment, 'onChangeText', '300,00')
        act(() => {
            interestRatePeriodYear.props.onPress()
        })
        act(() => {
            investmentTimeTypeYear.props.onPress()
        })
        act(() => {
            buttonCalculate.props.onPress()
        })
        expect(totalInvested.props.children).toEqual('R$21.700,00')
        expect(totalInInterest.props.children).toEqual('R$324,92')
        expect(amountWithInterest.props.children).toEqual('R$22.024,92')
        expect(interestAmountInTheLastMonth.props.children).toEqual('R$9,03')
    })
})
