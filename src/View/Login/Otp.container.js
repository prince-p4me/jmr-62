import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/authentication";
import OtpForm from "./OtpForm";
import { Toast } from "native-base";

class Otp extends Component {
  verifyOtp = ({ otp }) => {
    this.props.verifyMobileRequest({
      otp,
      mobile: this.props.mobile
    });
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { verified, processed, tempToken, token } = nextProps;
    console.log("nextProps OTP container", nextProps)
    let message = null;
    if (processed && !verified) {
      message = "OTP did not match";
    } if (processed && verified && token) {
      this.props.navigation.popToTop(); // Reset all modal of modal stacks. (this is available since 1.0.0 I think).
      this.props.navigation.goBack(null); // Then close modal itself to display the main app screen nav.
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

  render() {
    return (
      <OtpForm
        onSubmit={this.verifyOtp}
        mobile={this.props.mobile}
        fetching={this.props.fetching}
      />
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
