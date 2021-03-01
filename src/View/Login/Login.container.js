import React, { Component } from "react";
import { DeviceEventEmitter } from "react-native";
import { connect } from "react-redux";
import Constant from "../../Services/Constant";
import actions from "../../Store/Redux/authentication";
import LoginForm from "./LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    DeviceEventEmitter.addListener(Constant.OTP_SUCCESS, (data) => {
      console.log("data", data);
      this.props.navigation.navigate(data.newUser ? "Register" : "Otp");
    })
  }

  sendOtp = ({ mobile }) => {
    this.props.sendOtpRequest({ mobile });
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
    // if (processed) {
    //   this.props.navigation.navigate("Otp");
    // }
    return true;
  }

  render() {
    return <LoginForm onSubmit={this.sendOtp} fetching={this.props.fetching} />;
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
