import React, { Component } from "react";
import { connect } from "react-redux";
import dfhActions from "../../Store/Redux/dfh";
import SelectElement from "../Components/SelectElement";

class DeliveryLocation extends Component {
  deliveryLocationSelected = deliveryLocation => {
    this.props.setDeliveryLocation(deliveryLocation);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SelectElement
        items={this.props.shippingLocations}
        itemClicked={this.deliveryLocationSelected}
        isItemString={false}
        title={"Select Delivery Location"}
      />
    );
  }
}

const mapStateToProps = ({ shippingLocation }) => ({
  shippingLocations: shippingLocation.shippingLocations
});

const mapDispatchToProps = dfhActions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryLocation);
