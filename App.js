/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { DrawerContent } from "./screens/DrawerContent";

import MainTabScreen from "./screens/MainTabScreen";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarkScreen from "./screens/BookmarkScreen";

import { AuthContext } from "./components/context";

import RootStackScreen from "./screens/RootStackScreen";
import LoginStackNavigation from "./components/LoginStackNavigation";

const Drawer = createDrawerNavigator();

const App = () => {

    return (
        <LoginStackNavigation></LoginStackNavigation>
    );
};

export default App;
