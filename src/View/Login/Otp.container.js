import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/authentication";
import OtpForm from "./OtpForm";
import { Toast } from "native-base";
import { View, Text, ListItem, Body, Right } from "native-base";
import { TouchableOpacity } from "react-native";
import { Colors } from "../Themes";
import ButtonWithLoader from "../Components/ButtonWithLoader";

class Otp extends Component {
  state = {
    otpSend: 'false',
    errorState: 'false',
    mobile: "",
    callingCode: ""
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    const callingCode = navigation.state?.params?.callingCode;
    this.setState({
      mobile: this.props.mobile,
      callingCode
    });
  }

  verifyOtp = ({ otp }) => {
    this.props.verifyMobileRequest({
      otp,
      mobile: this.props.mobile
    });
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { verified, mobile, processed, navigation, token } = nextProps;
    const { otpSend } = nextState
    const callingCode = navigation.state?.params?.callingCode;

    console.log("nextProps OTP container", nextProps)
    let message = null;
    if (otpSend == true) {
      message = "OTP resend successful";
      this.setState({ otpSend: false })
    }
    if (processed && verified && token) {
      this.props.navigation.popToTop(); // Reset all modal of modal stacks. (this is available since 1.0.0 I think).
      this.props.navigation.goBack(null); // Then close modal itself to display the main app screen nav.
    }
    if (callingCode && callingCode != "91" && processed && verified && token) {
      message = "OTP has been sent to the registered email address . . .";
    }
    if (message) {
      Toast.show({
        text: message,
        buttonText: "Okay",
        duration: 3000
      });
    }
    return true;
  }

  sendOtp = mobile => {
    console.warn('called')
    this.setState({ otpSend: true }, () => {
      this.props.sendOtpRequest({ mobile, callingCode: this.state.callingCode });
    })
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <OtpForm
          onSubmit={this.verifyOtp}
          mobile={this.state.mobile}
          fetching={this.props.fetching}
          sendOtp={this.sendOtp}
        />
        {this.state.mobile
          ? <TouchableOpacity style={{
            marginTop: 40, height: 50, width: '95%',
            backgroundColor: Colors.ember,
            justifyContent: 'center', alignItems: 'center',
            marginHorizontal: "2.5%", marginBottom: 20
          }}
            onPress={() => { this.sendOtp(this.state.mobile) }}>
            <Text style={{ fontSize: 16, color: 'white' }}>RESEND OTP</Text>
          </TouchableOpacity>
          : null}
      </View>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  fetching: authentication.fetching,
  mobile: authentication.mobile,
  verified: authentication.verified,
  processed: authentication.processed,
  token: authentication.token,
  tempToken: authentication.tempToken,
});
const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Otp);
