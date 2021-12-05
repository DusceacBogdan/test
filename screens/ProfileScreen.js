import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons";

import { auth, firebase } from "../firebase";

// import Share from 'react-native-share';

import files from "../assets/filesBase64";

const ProfileScreen = ({ navigation }) => {
    //   const myCustomShare = async() => {
    //     const shareOptions = {
    //       message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
    //       url: files.appLogo,
    //       // urls: [files.image1, files.image2]
    //     }

    //     try {
    //       const ShareResponse = await Share.open(shareOptions);
    //       console.log(JSON.stringify(ShareResponse));
    //     } catch(error) {
    //       console.log('Error => ', error);
    //     }
    //   };


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [uuid, setUuid] = useState('')

    useEffect(() => {
        console.log("pula")
        const getUid = () => {
            setUuid = firebase.auth().currentUser.uid
        }
        const readUserData = () => {
            let dbRef = firebase.database().ref('Users')
            dbRef.orderByChild("uuid").equalTo(firebase.database().ref('Users')).on("value", snapshot => {
                console.log(snapshot.val())
            })
        }
        
    }, [])

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((error) => alert(error.message));
    };



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri:
                                "https://api.adorable.io/avatars/80/abott@adorable.png",
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title
                            style={[
                                styles.title,
                                {
                                    marginTop: 15,
                                    marginBottom: 5,
                                },
                            ]}
                        >
                            {name}
                        </Title>
                        <Caption style={styles.caption}>@j_doe</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>
                        Cluj-Napoca, Romania
                    </Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>
                        {phoneNumber}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>
                        {email}
                    </Text>
                </View>
            </View>

            {/* <View style={styles.infoBoxWrapper}>
                <View
                    style={[
                        styles.infoBox,
                        {
                            borderRightColor: "#dddddd",
                            borderRightWidth: 1,
                        },
                    ]}
                >
                    <Title>₹140.50</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Orders</Caption>
                </View>
            </View> */}

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" color="#37B24D" size={25} />
                        <Text style={styles.menuItemText}>Your Favorites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="credit-card" color="#37B24D" size={25} />
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name="share-outline" color="#37B24D" size={25} />
                        <Text style={styles.menuItemText}>
                            Tell Your Friends
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon
                            name="account-check-outline"
                            color="#37B24D"
                            size={25}
                        />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icons
                            name="settings-outline"
                            color="#37B24D"
                            size={25}
                        />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={handleSignOut}>
                    <View style={styles.menuItem}>
                        <Icons
                            name="settings-outline"
                            color="#37B24D"
                            size={25}
                        />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "500",
    },
    row: {
        flexDirection: "row",
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        flexDirection: "row",
        height: 100,
    },
    infoBox: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: "#777777",
        marginLeft: 20,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 26,
    },
});
