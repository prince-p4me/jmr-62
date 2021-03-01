import React, { Component } from "react";
// import { WebView } from "react-native-webview";
import actions from "../../Store/Redux/order";
import { connect } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast, Icon, Title } from "native-base";
import { StyleSheet, Text, View, Share, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from "react-native";
// import Clipboard from '@react-native-community/clipboard';
import colors from "../Themes/Colors";
import NormalHeader from "../Components/NormalHeader";

let refferalImg = require('./../Assets/refferal.jpeg');
let refferalImg2 = require('./../Assets/refferal2.jpeg');
let bridgeImg = require('./../Assets/bridge.jpeg');


class RefferalMore extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount = async () => {
        // let response = await axios.get('xyz')
    }

    onShare = async msg => {
        let message = msg ? msg : "React native is good framework";
        try {
            const result = await Share.share({ message });
            if (result.action === Share.sharedAction) {
                console.log("shared");
                if (result.activityType) {
                    console.log("shared with activity type:-" + result.activityType);
                } else {
                    console.log("shared");
                }
            } else if (result.action == Share.dismissedAction) {
                console.log("shared dismissed");
            }
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    }

    render() {
        const { data } = this.props;

        return (
            <View style={{ height: '100%', width: "100%", backgroundColor: "white" }}>
                <SafeAreaView />
                <NormalHeader title="REFERRAL" navigation={this.props.navigation} />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ImageBackground source={{ uri: data.referralBannerImage }} resizeMode="cover"
                        style={{ height: Dimensions.get("window").height / 3.3, width: "100%" }} />
                    <View style={{ paddingTop: 20, paddingHorizontal: 12 }}>
                        <Title style={{ fontSize: 24, color: colors.ember }}>{data.referralTitle}</Title>
                        <TouchableOpacity activeOpacity={.7} style={styles.shareBtn}
                            onPress={() => this.onShare()}>
                            <Title style={{ fontSize: 34, color: "white" }}>
                                {data.userReferral?.referralCode ? data.userReferral?.referralCode : "JMR#01"}</Title>
                            <Icon style={{ color: "white" }}
                                type="MaterialIcons" name="content-copy" />
                        </TouchableOpacity>
                        <Text style={styles.text}>
                            {data.referral_first_para}</Text>

                    </View>
                    <ImageBackground source={{ uri: data.referralFirstImage }} resizeMode="contain"
                        style={{ height: 170, width: "100%", marginVertical: 15 }} />
                    <Text style={styles.heading}>{data.referralHowWorkHeading}</Text>
                    <ImageBackground source={{ uri: data.referralHowWorkImage }} resizeMode="contain"
                        style={{ height: 170, width: "100%", marginVertical: 15 }} />
                    <Text style={[styles.text, { marginBottom: 20 }]}>
                        {data.referralHowWorkPara}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({ refferral, authentication }) => ({
    data: refferral.refferral,
    token: authentication.token
});

const mapDispatchToProps = actions;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RefferalMore);

const styles = StyleSheet.create({
    heading: {
        fontSize: 24, marginRight: 22,
        color: colors.ember,
        marginLeft: 14,
        fontWeight: "700"
    },
    next: {
        backgroundColor: colors.ember,
        paddingBottom: 5,
        paddingTop: 8,
        paddingLeft: 10,
        paddingRight: 15,
        alignSelf: "flex-end",
        borderRadius: 6
    },
    text: {
        fontSize: 16,
        color: "black",
        fontWeight: "600",
        marginHorizontal: 18
    },
    shareBtn: {
        paddingVertical: 5, paddingLeft: 30,
        width: "100%", flexDirection: "row",
        backgroundColor: colors.ember,
        borderRadius: 10, paddingRight: 10,
        alignItems: "center", marginVertical: 14,
        justifyContent: "space-between"
    }
})