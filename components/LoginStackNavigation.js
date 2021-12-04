import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import { HomeScreen } from '../screens/SignInScreen'
import DrawerNavigation from './DrawerNavigation'

const Stack = createStackNavigator()

const LoginStackNavigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={SignInScreen} />
                <Stack.Screen name='Register' component={SignUpScreen} />
                <Stack.Screen name='Home' component={DrawerNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginStackNavigation

