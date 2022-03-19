import 'react-native';
import React from 'react';
import  { BannerAdMob } from '../src/components/BannerAdMob'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('BannerAdMob Page', () => {
    it('render correctly', () => {
        renderer.create(<BannerAdMob />)
    })
})
