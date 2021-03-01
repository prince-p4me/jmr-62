import React, { Component } from "react";
import { connect } from "react-redux";
import orderActions from "../../Store/Redux/order";
import profileActions from "../../Store/Redux/profile";
import OrderSummaryPage from "./OrderSummary.page";
import LoadingIndicator from "../Components/LoadingIndicator";
import { Toast } from "native-base";
import Constant from "../../Services/Constant";

class OrderSummary extends Component {
  componentDidMount() {
    console.warn(this.props.order)
    if (this.props.coupon) {
      this.props.setCouponCode(null);
    } else {
      this.fetchOrderSummary();
    }
    this.fetchLoyaltyPoints();
  }

  componentDidUpdate(prevProps, prevState) {
    let { coupon, couponStatus, useLoyaltyPoints } = this.props;
    if (
      prevProps.coupon != coupon ||
      prevProps.useLoyaltyPoints != useLoyaltyPoints
    ) {
      this.fetchOrderSummary();
    }
    let message = null;

    if (couponStatus != prevProps.couponStatus) {
      if (couponStatus == 1) {
        message = "Coupon Applied Successfully";
      } else if (couponStatus == -1) {
        message = "Invalid Coupon Code";
        this.props.setCouponCode(null);
      }
      if (message) {
        Toast.show({
          text: message,
          buttonText: "Okay",
          duration: 3000
        });
      }
    }
  }
  fetchLoyaltyPoints() {
    this.props.loyaltyPointsRequest({ token: this.props.token });
    // this.props.loyaltyPointsRequest(this.props.token);
  }
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   const { couponStatus, fetching, useLoyaltyPoints } = nextProps;
  //   if (useLoyaltyPoints != this.props.useLoyaltyPoints) {
  //     this.fetchOrderSummary(useLoyaltyPoints);
  //   }
  //   let message = null;
  //   if (this.props.couponStatus != couponStatus) {
  //     if (couponStatus == 1) {
  //       message = "Coupon Applied Successfully";
  //     } else if (couponStatus == -1) {
  //       message = "Invalid Coupon Code";
  //     }
  //     if (message) {
  //       Toast.show({
  //         text: message,
  //         buttonText: "Okay",
  //         duration: 3000
  //       });
  //     }
  //   }
  //   return true;
  // }
  fetchOrderSummary = () => {
    let {
      shippingLocation,
      token,
      sections,
      shippingAddressId,
      billingAddressId,
      coupon,
      useLoyaltyPoints
    } = this.props;

    let parameters = {
      shippingLocationId: shippingLocation.id,
      token,
      sections,
      shippingAddressId,
      billingAddressId,
      coupon,
      useLoyaltyPoints
    };
    console.warn(parameters)
    this.props.orderSummaryRequest(parameters);
  };

  applyCoupon = ({ coupon }) => {
    this.props.setCouponCode(coupon);
  };

  changeLoyaltyStatus = () => {
    this.props.changeLoyaltyPointsStatus();
  };

  next = () => {
    this.props.navigation.navigate("PaymentMethods", {
      flow: Constant.SALES_FLOW
    });
  };

  render() {
    return this.props.order ? (
      <OrderSummaryPage
        navigation={this.props.navigation}
        order={this.props.order}
        shippingLocation={this.props.shippingLocation.name}
        fetching={this.props.fetching}
        applyCoupon={this.applyCoupon}
        next={this.next}
        loyaltyPoints={this.props.loyaltyPoints}
        changeLoyaltyStatus={this.changeLoyaltyStatus}
        useLoyaltyPoints={this.props.useLoyaltyPoints}
      />
    ) : (
        <LoadingIndicator />
      );
  }
}

const mapStateToProps = ({
  address,
  cart,
  authentication,
  shippingLocation,
  order,
  profile
}) => ({
  shippingAddressId: address.shippingAddressId,
  billingAddressId: address.billingAddressId,
  sections: cart.sections,
  token: authentication.token,
  shippingLocation: shippingLocation.selectedShippingLocation,
  order: order.order,
  couponStatus: order.couponStatus,
  coupon: order.coupon,
  fetching: order.fetching,
  loyaltyPoints: profile.loyaltyPoints,
  useLoyaltyPoints: order.useLoyaltyPoints
});

const mapDispatchToProps = { ...profileActions, ...orderActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);
