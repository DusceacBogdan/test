import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import StarRating from "../components/StarRating";

import { markers } from "../model/mapData";

const HomeScreen = ({ navigation }) => {
    const theme = useTheme();

    return (
        <ScrollView style={styles.container}>
            <StatusBar
                barStyle={theme.dark ? "light-content" : "dark-content"}
            />
            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay
                    horizontal={false}
                    height={200}
                    activeDotColor="#37B24D"
                >
                    <View style={styles.slide}>
                        <Image
                            source={require("../assets/recycle/recycle-image1.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../assets/recycle/recycle-image4.jpg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require("../assets/recycle/recycle-image4.jpeg")}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate("CardListScreen", {
                            title: "Restaurant",
                        })
                    }
                >
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons
                            style={styles.chipsIcon}
                            name="bottle-wine"
                            size={40}
                            color="#37B24D"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Glass</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                        navigation.navigate("CardListScreen", {
                            title: "Fastfood Center",
                        })
                    }
                >
                    <View style={styles.categoryIcon}>
                        <Ionicons
                            name="newspaper-sharp"
                            style={styles.chipsIcon}
                            size={30}
                            color="#37B24D"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Paper</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons
                            name="electrical-services"
                            size={35}
                            color="#37B24D"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Electronics</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons
                            name="trash-can"
                            size={35}
                            color="#37B24D"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Metal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <Ionicons
                            name="heart-sharp"
                            size={35}
                            color="#37B24D"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                    <View style={styles.categoryIcon}>
                        <MaterialIcons
                            name="expand-more"
                            size={35}
                            color="#37B24D"
                        />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Show More</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsWrapper}>
                <Text
                    style={{
                        alignSelf: "center",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#333",
                    }}
                >
                    Recently Viewed
                </Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={markers[1].image}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>{markers[1].title}</Text>
                        <StarRating
                            ratings={markers[1].rating}
                            reviews={markers[1].reviews}
                        />
                        <Text style={styles.cardDetails}>
                            {markers[1].items}
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={markers[2].image}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>{markers[2].title}</Text>
                        <StarRating
                            ratings={markers[2].rating}
                            reviews={markers[2].reviews}
                        />
                        <Text style={styles.cardDetails}>
                            {markers[2].items}
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={markers[3].image}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>{markers[3].title}</Text>
                        <StarRating
                            ratings={markers[3].rating}
                            reviews={markers[3].reviews}
                        />
                        <Text style={styles.cardDetails}>
                            {markers[3].items}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: "90%",
        marginTop: 10,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 8,
    },
    sliderImage: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: "30%",
        marginHorizontal: 0,
        alignSelf: "center",
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 70,
        height: 70,
        backgroundColor: "#defae3" /* '#37B24D' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: "center",
        marginTop: 5,
        color: "#37B24D",
    },
    cardsWrapper: {
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: "row",
        shadowColor: "#999",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#fff",
    },
    cardTitle: {
        fontWeight: "bold",
    },
    cardDetails: {
        fontSize: 12,
        color: "#444",
    },
});
