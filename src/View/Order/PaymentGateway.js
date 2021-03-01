import React, { Component } from "react";
import { WebView } from "react-native-webview";
import actions from "../../Store/Redux/order";
import { connect } from "react-redux";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast } from "native-base";

// ...
class PaymentGateway extends Component {
  onLoadStart = e => {
    let url = e.nativeEvent.url;
    if (url.indexOf("jmrPaymentStatus") != -1) {
      let status = url
        .split("?")[1]
        .split("&")[1]
        .split("=")[1];
      this.props.setPaymentStatus(status);
    }
    //For Testing
    // this.props.setPaymentStatus("Pending");
    console.warn("https://justmyroots.com/jmr2021/home/makePayment/" + this.props.orderId)
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { paymentStatus } = nextProps;
    if (paymentStatus) {
      this.props.navigation.goBack();
      this.props.resetPaymentMethod();
    }
    return true;
  }

  renderLoadingView() {
    return <LoadingIndicator />;
  }
  render() {
    return (
      <WebView
        source={{
          // uri: "https://justmyroots.com/jmr2021/home/makePayment/" + this.props.orderId,
          uri: "https://justmyroots.com/home/makePayment/" + this.props.orderId
        }}
        onLoadStart={this.onLoadStart}
        renderLoading={this.renderLoadingView}
        startInLoadingState={true}
      />
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
