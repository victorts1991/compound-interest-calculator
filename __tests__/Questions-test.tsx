import 'react-native'
import React from 'react'
import { Questions } from '../src/components/Questions'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/react-native'
const { act } = renderer;

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('Questions Page', () => {
    it(('should be able to open and close answers'), () => {
        const Screen = renderer.create(<Questions />)

        const question1 = Screen.root.findByProps({ testID: 'question-1' })
        const question2 = Screen.root.findByProps({ testID: 'question-2' })
        const question3 = Screen.root.findByProps({ testID: 'question-3' })
        const question4 = Screen.root.findByProps({ testID: 'question-4' })
        const question5 = Screen.root.findByProps({ testID: 'question-5' })
        const question6 = Screen.root.findByProps({ testID: 'question-6' })
        const question7 = Screen.root.findByProps({ testID: 'question-7' })
        const question8 = Screen.root.findByProps({ testID: 'question-8' })

        //Question 1
        expect(Screen.root.findAllByProps({ testID: 'answer-1' }).length).toEqual(0)
        act(() => {
            question1.props.onPress()
        })
        expect(Screen.root.findAllByProps({ testID: 'answer-1' }).length).toBeGreaterThan(1)

        //Question 2
        expect(Screen.root.findAllByProps({ testID: 'answer-2' }).length).toEqual(0)
        act(() => {
            question2.props.onPress()
        })
        expect(Screen.root.findAllByProps({ testID: 'answer-2' }).length).toBeGreaterThan(1)

        //Question 3
        expect(Screen.root.findAllByProps({ testID: 'answer-3' }).length).toEqual(0)
        act(() => {
            question3.props.onPress()
        })
        expect(Screen.root.findAllByProps({ testID: 'answer-3' }).length).toBeGreaterThan(1)

        //Question 4
        expect(Screen.root.findAllByProps({ testID: 'answer-4' }).length).toEqual(0)
        act(() => {
            question4.props.onPress()
        })
        expect(Screen.root.findAllByProps({ testID: 'answer-4' }).length).toBeGreaterThan(1)

        //Question 5
        expect(Screen.root.findAllByProps({ testID: 'answer-5' }).length).toEqual(0)
        act(() => {
            question5.props.onPress()
        })
        expect(Screen.root.findAllByProps({ testID: 'answer-5' }).length).toBeGreaterThan(1)

        //Question 6
        expect(Screen.root.findAllByProps({ testID: 'answer-6' }).length).toEqual(0)
        act(() => {
            question6.props.onPress()
        })
        expect(Screen.root.findAllByProps({ testID: 'answer-6' }).length).toBeGreaterThan(1)

        //Question 7
        expect(Screen.root.findAllByProps({ testID: 'answer-7' }).length).toEqual(0)
        act(() => {
            question7.props.onPress()
        })
        expect(Screen.root.findAllByProps({ testID: 'answer-7' }).length).toBeGreaterThan(1)

        //Question 8
        expect(Screen.root.findAllByProps({ testID: 'answer-8' }).length).toEqual(0)
        act(() => {
            question8.props.onPress()
        })
        expect(Screen.root.findAllByProps({ testID: 'answer-8' }).length).toBeGreaterThan(1)
    })  
})