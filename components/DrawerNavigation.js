import React from 'react'
import { DrawerContent } from "../screens/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MainTabScreen from '../screens/MainTabScreen';
import SupportScreen from '../screens/SupportScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BookmarkScreen from '../screens/BookmarkScreen';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <NavigationContainer independent={true} /*theme={theme}*/>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="HomeDrawer"
                    component={MainTabScreen}
                />
                <Drawer.Screen
                    name="SupportScreen"
                    component={SupportScreen}
                />
                <Drawer.Screen
                    name="SettingsScreen"
                    component={SettingsScreen}
                />
                <Drawer.Screen
                    name="BookmarkScreen"
                    component={BookmarkScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation
