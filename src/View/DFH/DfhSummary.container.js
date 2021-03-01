import React, { Component } from "react";
import { connect } from "react-redux";
import DfhSummaryPage from "./DfhSummary.page";
import { Toast } from "native-base";
import actions from "../../Store/Redux/dfh";
import Constant from "../../Services/Constant";

class DfhSummary extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    let { dfh, token } = this.props;
    let { from, to, items, pickUp, delivery } = dfh;
    let parameters = {
      token,
      from,
      to,
      products: items,
      pickUp,
      delivery
    };
    this.props.dfhSummaryRequest(parameters);
  }

  goToNext = () => {
    this.props.navigation.navigate("PaymentMethods", {
      flow: Constant.DFH_FLOW
    });
  };

  render() {
    return this.props.dfh.orderSummary ? (
      <DfhSummaryPage
        navigation={this.props.navigation}
        dfh={this.props.dfh}
        deliveryLocation={this.props.deliveryLocation}
        pickupLocation={this.props.pickupLocation}
        goToNext={this.goToNext}
      />
    ) : null;
  }
}

const mapStateToProps = ({ dfh, authentication, pickupLocation }) => ({
  dfh,
  deliveryLocation: dfh.selectedDeliveryLocation,
  pickupLocation: pickupLocation.selectedPickupLocation,
  token: authentication.token
});
const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DfhSummary);
