import React from "react";
import { View, StyleSheet } from "react-native";
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons";

import { AuthContext } from "../components/context";

export function DrawerContent(props) {
    const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <Avatar.Image
                                source={require("../assets/logo2.png")}
                                size={60}
                            />
                            <View
                                style={{
                                    marginLeft: 15,
                                    flexDirection: "column",
                                }}
                            >
<<<<<<< HEAD
                                <Title style={styles.title}>Firstname LastName</Title>
=======
                                <Title style={styles.title}>
                                    FirstName LastName
                                </Title>
                                {/* <Caption style={styles.caption}>@j_doe</Caption> */}
>>>>>>> 70b9381578e89e7f74638eacd776b858bc96610f
                            </View>
                        </View>

                        {/* <View style={styles.row}> */}
                            {/* <View style={styles.section}>
                                <Paragraph
                                    style={[styles.paragraph, styles.caption]}
                                >
                                    80
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Following
                                </Caption>
                            </View> */}
                            {/* <View style={styles.section}>
                                <Paragraph
                                    style={[styles.paragraph, styles.caption]}
                                >
                                    100
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Followers
                                </Caption>
                            </View> */}
                        {/* </View> */}
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate("Home");
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {
                                props.navigation.navigate("Profile");
                            }}
                        />
                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {
                                props.navigation.navigate("BookmarkScreen");
                            }}
                        /> */}
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icons
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {
                                props.navigation.navigate("SettingScreen");
                            }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {
                                props.navigation.navigate("SupportScreen");
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple
                            onPress={() => {
                                // toggleTheme();
                            }}
                        >
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => {
                        // signOut();
                    }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 12,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
