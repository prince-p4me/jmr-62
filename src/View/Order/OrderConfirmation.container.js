import React, { Component } from "react";
import { connect } from "react-redux";
import OrderConfirmationPage from "./OrderConfirmation.page";
import actions from "../../Store/Redux/cart";
import orderActions from "../../Store/Redux/order";
import Constant from "../../Services/Constant";

class OrderConfirmation extends Component {
  goToHome = () => {
    if (this.props.navigation.state.params.flow == Constant.DFH_FLOW) {
      this.props.navigation.navigate("Dfh");
    } else {
      this.props.navigation.navigate("Home");
    }
    this.props.emptyCart();
    this.props.resetOrder();
  };

  render() {
    return (
      <OrderConfirmationPage
        orderId={this.props.orderId}
        goToHome={this.goToHome}
      />
    );
  }
}

const mapStateToProps = ({ order }) => ({
  orderId: order.orderId
});

const mapDispatchToProps = { ...actions, ...orderActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderConfirmation);
