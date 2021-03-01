import React, { Component } from "react";
import { WebView } from "react-native-webview";
import actions from "../../Store/Redux/order";
import { connect } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast } from "native-base";
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
// import axios from "axios"
import RazorpayCheckout from 'react-native-razorpay';

const colors = {
    primary: "rgb(161,30,32)",
    headerText: "rgb(89,89,89)"
}
// ...

class PaymentGateway extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount = async () => {
        // let response = await axios.get('xyz')
    }
    copyCode = () => {

    }

    render() {
        return (
            <View style={{ height: '100%', width: "100%", backgroundColor: "white" }}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => {
                    var options = {
                        description: 'Credits towards consultation',
                        image: "https://playdude-aws.s3.ap-south-1.amazonaws.com/assets/img/brand-logo.png",
                        currency: 'INR',
                        key: 'rzp_test_6jHygZEl0oVGU8',
                        order_id: 'order_EGFHWCz23HBMGR',
                        name: 'foo',
                        notes: {
                            "orderId": "v8Mm5sRq",
                            "transactionId": "O3hMtyhL",
                            "userId": "83957",
                            "amount": 20000
                        },
                        prefill: {
                            email: 'void@razorpay.com',
                            contact: '9191919191',
                            name: 'Razorpay Software'
                        },
                        theme: { color: color.theme }
                    }
                    RazorpayCheckout.open(options).then((data) => {
                        // handle success
                        alert(`Success: ${data.razorpay_payment_id}`);
                    }).catch((error) => {
                        // handle failure
                        alert(`Error: ${error.code} | ${error.description}`);
                    });
                }}></TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = ({ order }) => ({
    orderId: order.orderId,
    paymentStatus: order.paymentStatus
});

const mapDispatchToProps = actions;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentGateway);