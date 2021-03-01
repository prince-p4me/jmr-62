import React, { Component } from "react";
// import { WebView } from "react-native-webview";
import actions from "../../Store/Redux/refferral";
import { connect } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast, Icon, Title } from "native-base";
import { StyleSheet, Text, View, Share, SafeAreaView, TouchableOpacity, FlatList, Dimensions, ImageBackground } from "react-native";
// import Clipboard from '@react-native-community/clipboard';
import colors from "../Themes/Colors";
import NormalHeader from "../Components/NormalHeader";

let refferalImg = require('./../Assets/refferal.jpeg')


class Refferal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.refferralRequest({ token: this.props.token });
    }

    onShare = async data => {
        let message = data.referralMessage + " " + data.referralLink;
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
        console.log("referral", data);
        return (
            <View style={{ height: '100%', width: "100%", backgroundColor: "white" }}>
                <SafeAreaView />
                <NormalHeader title="REFERRAL" navigation={this.props.navigation} />
                <View style={{ flex: 1 }}>
                    <ImageBackground source={{ uri: data.referralBannerImage }} resizeMode="cover"
                        style={{ height: Dimensions.get("window").height / 3.3, width: "100%" }} />
                    <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 12 }}>
                        <Title style={{ fontSize: 24, color: colors.ember }}>{data.referralTitle}</Title>
                        <TouchableOpacity activeOpacity={.7} style={styles.shareBtn}
                            onPress={() => this.onShare(data.userReferral)}>
                            <Title style={{ fontSize: 34, color: "white" }}>
                                {data.userReferral?.referralCode ? data.userReferral?.referralCode : "JMR#01"}</Title>
                            <Icon style={{ color: "white" }}
                                type="MaterialIcons" name="content-copy" />
                        </TouchableOpacity>
                        <Text style={styles.text}>
                            {data.referral_first_para}</Text>
                        <TouchableOpacity activeOpacity={.7}
                            style={styles.next} onPress={() => this.props.navigation.navigate("RefferalMore")}>
                            <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
                                Know More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
)(Refferal);

const styles = StyleSheet.create({
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
        fontSize: 14, color: "black",
        fontWeight: "600", marginHorizontal: 18
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