import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ProfileScreen from '../screens/ProfileScreen'
import DrawerNavigation from './DrawerNavigation'
import SignInScreen from '../screens/SignInScreen'
import LoginStackNavigation from './LoginStackNavigation'

const Stack = createStackNavigator()

const ProfileStackNavigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Profile' component={ProfileScreen} />
                <Stack.Screen name='Login' component={LoginStackNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ProfileStackNavigation