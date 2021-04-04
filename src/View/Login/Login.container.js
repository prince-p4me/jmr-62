import React, { Component } from "react";
import { DeviceEventEmitter } from "react-native";
import { connect } from "react-redux";
import Constant from "../../Services/Constant";
import actions from "../../Store/Redux/authentication";
import LoginForm from "./LoginForm";
import { Toast, View } from "native-base";
import PhoneNumberPicker from 'react-native-country-code-telephone-input'
import ButtonWithLoader from "../Components/ButtonWithLoader";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
      callingCode: "",
      phoneNo: "",
      cca2: ""
    };

    DeviceEventEmitter.addListener(Constant.OTP_SUCCESS, (data) => {
      console.log("data", data);
      this.props.navigation.navigate((data.newUser ? "Register" : "Otp"), { callingCode: this.state.callingCode });
    });
  }

  phoneNumberPickerChanged(country, callingCode, phoneNumber) {
    this.setState({ countryName: country.name, cca2: country.cca2, callingCode: callingCode, phoneNo: phoneNumber });
  }

  sendOtp = mobile => {
    this.props.sendOtpRequest({ mobile, callingCode: this.state.callingCode });
  };

  componentDidMount() {
    this.props.resetLogin();
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { processed } = nextProps;
    console.log("nextProps", nextProps);
    return true;
  }

  render() {
    let { cca2, callingCode, phoneNo } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <PhoneNumberPicker
          countryHint={{ name: 'India', cca2: 'IN', callingCode: "91" }}
          onChange={this.phoneNumberPickerChanged.bind(this)}
        />
        <View style={{ width: "100%", paddingHorizontal: 16, marginTop: 50 }}>

          <ButtonWithLoader
            fetching={this.props.fetching}
            title="Send OTP"
            onPress={() => {
              if (!phoneNo || (callingCode && cca2 && cca2 == "IN" && phoneNo.length != 10)) {
                Toast.show({
                  text: "Mobile number is not valid",
                  buttonText: "Okay",
                  duration: 3000
                });
              } else this.sendOtp(phoneNo);
            }}
          />
        </View>
      </View>
    )
  }
}
const mapStateToProps = ({ authentication }) => ({
  fetching: authentication.fetching,
  processed: authentication.processed,
  authentication,
});
const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
