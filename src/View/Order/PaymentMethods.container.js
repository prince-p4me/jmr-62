import React, { Component } from "react";
import { connect } from "react-redux";
// import { Clipboard } from "react-native";
import actions from "../../Store/Redux/order";
import PaymentMethodsPage from "./PaymentMethods.page";
import { Toast } from "native-base";
import Constant from "../../Services/Constant";

class PaymentMethods extends Component {
  componentDidMount() {
    if (this.props.navigation.state.params.flow == Constant.DFH_FLOW) {
      let { deliveryLocation, token, orderSummary } = this.props;
      let parameters = {
        shippingLocationId: parseInt(deliveryLocation.id),
        token,
        amount: orderSummary.booking_charges
      };
      console.warn(parameters)
      this.props.paymentMethodsRequest(parameters);
    } else {
      let { shippingLocationId, token, amount } = this.props;
      let parameters = {
        shippingLocationId: parseInt(shippingLocationId),
        token,
        amount
      };
      console.warn(parameters)
      this.props.paymentMethodsRequest(parameters);
    }
  }

  selectPaymentMethod = method => {
    this.props.setPaymentMethod(method.type);
    this.props.setPaymentStatus(null);
    console.warn(this.props.orderId)
    if (this.props.orderId && method.type != "card_on_delivery") {
      this.props.navigation.navigate("PaymentGateway");
    } else {
      this.createOrder(method.type);
    }
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const {
      orderId,
      selectedPaymentMethod,
      sections,
      paymentStatus,
      navigation
    } = nextProps;
    debugger;
    if (
      (orderId && navigation.state.params.flow == Constant.DFH_FLOW) ||
      (orderId &&
        sections.length > 0 &&
        navigation.state.params.flow != Constant.DFH_FLOW)
    ) {
      if (paymentStatus == "Paid") {
        this.props.navigation.navigate("OrderConfirmation", {
          flow: navigation.state.params.flow
        });
      } else if (paymentStatus == "Pending") {
        Toast.show({
          text: "Payment Failed. Please Try Again!",
          buttonText: "Okay",
          duration: 3000
        });
      } else if (selectedPaymentMethod == "card_on_delivery") {
        this.props.navigation.navigate("OrderConfirmation", {
          flow: navigation.state.params.flow
        });
      } else {
        this.props.navigation.navigate("PaymentGateway");
      }
    }
    return true;
  }

  createOrder = paymentType => {
    if (this.props.navigation.state.params.flow == Constant.DFH_FLOW) {
      let payment = { payment_type: paymentType };
      let { dfh, token, shippingLocationId, } = this.props;
      let { from, to, items, pickUp, delivery } = dfh;
      let parameters = {
        shippingLocationId,
        token,
        from,
        to,
        products: items,
        pickUp,
        delivery,
        payment
      };
      this.props.createDfhOrderRequest(parameters);
    } else {
      let {
        shippingLocationId,
        token,
        sections,
        shippingAddressId,
        billingAddressId,
        useLoyaltyPoints,
        coupon
      } = this.props;

      let parameters = {
        shippingLocationId,
        token,
        sections,
        shippingAddressId,
        billingAddressId,
        coupon,
        useLoyaltyPoints,
        payment_type: paymentType
      };
      this.props.createOrderRequest(parameters);
    }
  };
  getAmount = () => {
    if (this.props.navigation.state.params.flow == Constant.DFH_FLOW) {
      let { orderSummary } = this.props;
      return orderSummary.booking_charges;
    } else {
      let { amount } = this.props;
      return amount;
    }
  };
  render() {
    return (
      <PaymentMethodsPage
        navigation={this.props.navigation}
        amount={this.getAmount()}
        paymentMethods={this.props.paymentMethods}
        selectPaymentMethod={this.selectPaymentMethod}
        createOrder={this.createOrder}
      />
    );
  }
}

const mapStateToProps = ({
  authentication,
  shippingLocation,
  order,
  cart,
  address,
  dfh
}) => ({
  shippingAddressId: address.shippingAddressId,
  billingAddressId: address.billingAddressId,
  sections: cart.sections,
  token: authentication.token,
  shippingLocationId: shippingLocation.selectedShippingLocation.id,
  amount: order.order ? order.order.total : 0,
  paymentMethods: order.paymentMethods,
  selectedPaymentMethod: order.selectedPaymentMethod,
  coupon: order.coupon,
  orderId: order.orderId,
  useLoyaltyPoints: order.useLoyaltyPoints,
  paymentStatus: order.paymentStatus,
  deliveryLocation: dfh.selectedDeliveryLocation,
  orderSummary: dfh.orderSummary,
  dfh: dfh
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentMethods);
