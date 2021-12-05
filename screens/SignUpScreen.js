import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { auth, firebase } from "../firebase";

const SignUpScreen = ({ navigation }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [vouchersArray, setVouchersArray] = useState([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace("Home");
            }
        });

        return unsubscribe;
    }, []);

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                firebase
                    .database()
                    .ref("Users/")
                    .push({
                        email: email,
                        name: name,
                        phoneNumber: phoneNumber,
                        uuid: firebase.auth().currentUser.uid,
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                const user = userCredentials.user;
                console.log("Registered with: ", user.email);
            })
            .catch((error) => alert(error.message));
    };

    const goToLogin = () => {
        navigation.replace("Login");
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#37B24D" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <ScrollView>
                    <Text style={styles.text_footer}>Name</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            placeholder="Name"
                            style={styles.textInput}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <Text
                        style={[
                            styles.text_footer,
                            {
                                marginTop: 10,
                            },
                        ]}
                    >
                        Phone number
                    </Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            placeholder="Phone number"
                            style={styles.textInput}
                            keyboardType="phone-pad"
                            onChangeText={(text) => setPhoneNumber(text)}
                        />
                    </View>
                    <Text
                        style={[
                            styles.text_footer,
                            {
                                marginTop: 10,
                            },
                        ]}
                    >
                        Email
                    </Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    <Text
                        style={[
                            styles.text_footer,
                            {
                                marginTop: 10,
                            },
                        ]}
                    >
                        Password
                    </Text>
                    <View style={styles.action}>
                        <Feather name="lock" color="#05375a" size={20} />
                        <TextInput
                            placeholder="Your Password"
                            style={styles.textInput}
                            autoCapitalize="none"
                            secureTextEntry
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry
                        />
                    </View>

                    <Text
                        style={[
                            styles.text_footer,
                            {
                                marginTop: 10,
                            },
                        ]}
                    >
                        Confirm Password
                    </Text>
                    <View style={styles.action}>
                        <Feather name="lock" color="#05375a" size={20} />
                        <TextInput
                            placeholder="Confirm Your Password"
                            style={styles.textInput}
                            secureTextEntry
                            autoCapitalize="none"
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text
                            style={[
                                styles.color_textPrivate,
                                { fontWeight: "bold" },
                            ]}
                        >
                            {" "}
                            Terms of service
                        </Text>
                        <Text style={styles.color_textPrivate}> and</Text>
                        <Text
                            style={[
                                styles.color_textPrivate,
                                { fontWeight: "bold" },
                            ]}
                        >
                            {" "}
                            Privacy policy
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={handleSignUp}
                        >
                            <LinearGradient
                                colors={["#5eff85", "#37B24D"]}
                                style={styles.signIn}
                            >
                                <Text
                                    style={[
                                        styles.textSign,
                                        {
                                            color: "#fff",
                                        },
                                    ]}
                                >
                                    Sign Up
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={goToLogin}
                            style={[
                                styles.signIn,
                                {
                                    borderColor: "#37B24D",
                                    borderWidth: 1,
                                    marginTop: 15,
                                },
                            ]}
                        >
                            <Text
                                style={[
                                    styles.textSign,
                                    {
                                        color: "#37B24D",
                                    },
                                ]}
                            >
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#37B24D",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: Platform.OS === "ios" ? 3 : 5,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
    },
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textPrivate: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    color_textPrivate: {
        color: "grey",
    },
});
