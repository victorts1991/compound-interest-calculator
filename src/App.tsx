import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import { BannerAdMob } from './components/BannerAdMob'

import { Home } from './components/Home'
import { Questions } from './components/Questions'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

interface ItabBarIcon {
  color: string;
  size: number;
}

export default function App () {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <>
      <BannerAdMob />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: '#FFF',
            tabBarInactiveTintColor: '#6da2e8',
            tabBarStyle: {
              backgroundColor: '#004AAD',
              height: 55
            },
            tabBarItemStyle: {
              marginTop: -5,
              marginBottom: 5,
            }
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Início',
              tabBarIcon: ({ color, size } : ItabBarIcon) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Questions"
            component={Questions}
            options={{
              tabBarLabel: 'Dúvidas',
              tabBarIcon: ({ color, size } : ItabBarIcon) => (
                <MaterialCommunityIcons name="frequently-asked-questions" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
};
