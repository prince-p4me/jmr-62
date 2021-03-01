import React, { Component } from "react";
// import { WebView } from "react-native-webview";
import actions from "../../Store/Redux/offers";
import { connect } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast, Icon } from "native-base";
import { Platform } from "react-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, FlatList, Dimensions } from "react-native";
import Clipboard from '@react-native-community/clipboard';
import colors from "../Themes/Colors";
import NormalHeader from "../Components/NormalHeader";
let offerIcon = require('./../Assets/coupons.png')


class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                codeType: "New User",
                couponCode: 'JMR',
                heading: "lakshay kukreja is a good boy",
                description: "us e my this code this will help ypu alot us e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alot"
            },
            {
                codeType: "Kochi Product",
                couponCode: 'JMR 1',
                heading: "lakshay kukreja is a good boy",
                description: "us e my this code this will help ypu alot us e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alot"
            },
            {
                codeType: "For Delhi Only",
                couponCode: 'JMR 2',
                heading: "lakshay kukreja is a good boy",
                description: "us e my this code this will help ypu alot us e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alot"
            }, {
                codeType: "Bangal",
                couponCode: 'JMR 3',
                heading: "lakshay kukreja is a good boy",
                description: "us e my this code this will help ypu alot us e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alotus e my this code this will help ypu alot"
            }]
        };
    }

    componentDidMount = async () => {
        // let response = await axios.get('xyz')
        this.props.offersRequest({
            shippingLocationId: this.props.shippingLocation.id,
            token: this.props.token
        });
    }

    copyCode = (item) => {
        // if (Platform.OS == "android") {
        //     Clipboard.default.setString(item.code);
        // } else {
        //     Clipboard.setString(item.code);
        // }
        Clipboard.setString(item.code);

        console.log("code coppied", item);
        Toast.show({ text: ("Coupon code " + item.code + " copied"), duration: 3000, buttonText: "Okay" })
    }

    renderOffer = ({ item }) => {
        // console.log("item", item)
        return (
            <View style={{ marginTop: 8 }}>
                <TouchableOpacity style={{
                    height: 40, width: "95%",
                    backgroundColor: colors.ember, borderRadius: 5,
                    marginHorizontal: "2.5%", flexDirection: "row",
                    paddingHorizontal: "2%"
                }} activeOpacity={.7}
                    onPress={() => {
                        this.copyCode(item);
                    }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                        {item.couponType && <View style={{ flex: 6, justifyContent: "center", }}>
                            <Text numberOfLines={1} style={{ color: 'white', fontSize: 20 }}> {item.couponType}</Text>
                        </View>}
                        <View style={{
                            paddingLeft: '5%', justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{
                                color: 'white', fontWeight: 'bold',
                                fontSize: 20
                            }}> {item.code}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: 40, height: 40,
                        justifyContent: "center",
                        alignItems: "flex-end"
                    }}>
                        <Icon style={{ color: "white" }}
                            type="MaterialIcons" name="content-copy" />
                    </View>
                </TouchableOpacity>
                <Text style={{
                    marginTop: 8, marginHorizontal: "5%",
                    fontWeight: "bold", color: "black"
                }}>{item.title}</Text>
                <Text style={{
                    marginTop: 8, alignSelf: "center",
                    color: "black", marginHorizontal: "5%"
                }}>{item.description}</Text>
                <Text style={{
                    marginTop: 8, color: colors.ember,
                    marginHorizontal: "5%"
                }}>Standard T&C Apply</Text>
                <View style={{
                    marginTop: 8, height: 3,
                    backgroundColor: colors.ember, width: "100%"
                }} />
            </View>

        )
    }

    renderHeader = () => {
        return (
            <View style={{ height: Dimensions.get("window").height / 3 }}>
                <View style={{ flex: 2 }}>
                    <Image source={offerIcon} style={{ height: "100%", width: "100%" }}
                        resizeMode="stretch" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontWeight: 'bold', fontSize: 40,
                        color: colors.ember, alignSelf: "center"
                    }}>JMR COUPONS</Text>
                    <View style={{
                        height: 2.5, width: "100%",
                        backgroundColor: colors.ember, marginTop: 5
                    }} />
                </View>
            </View>
        )
    }

    render() {
        console.log("offers", this.props.offers)
        return (
            <View style={{ height: '100%', width: "100%", backgroundColor: "white" }}>
                <SafeAreaView />
                <NormalHeader title="OFFERS" navigation={this.props.navigation} />
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    ListHeaderComponent={this.renderHeader}
                    data={this.props.offers}
                    renderItem={this.renderOffer}
                    keyExtractor={(id, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ refferral, offers, shippingLocation, authentication }) => ({
    data: refferral.refferral,
    token: authentication.token,
    shippingLocation: shippingLocation.selectedShippingLocation,
    offers: offers.offers
});

const mapDispatchToProps = actions;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Offers);