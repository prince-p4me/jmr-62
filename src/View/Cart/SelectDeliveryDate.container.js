import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/cart";
import SelectElement from "../Components/SelectElement";

class SelectDeliveryDate extends Component {
  dateSelected = selectedDate => {
    let parameters = {
      sourcingLocationId: this.props.navigation.state.params.sourcingLocationId,
      date: selectedDate
    };
    this.props.setDeliveryDate(parameters);

    //Fetch Time Slot for the new Date
    parameters = {
      shippingLocationId: this.props.selectedShippingLocation.id,
      sourcingLocationId: this.props.navigation.state.params.sourcingLocationId,
      date: selectedDate
    };

    this.props.timeSlotsRequest(parameters);
    this.props.navigation.goBack();
    this.props.navigation.navigate("SelectTimeSlot", {
      sourcingLocationId: this.props.navigation.state.params.sourcingLocationId
    });
  };
  render() {
    return (
      <SelectElement
        items={this.props.deliveryDates}
        itemClicked={this.dateSelected}
        isItemString={true}
        title={"Select Delivery Date"}
      />
    );
  }
}

const mapStateToProps = ({ cart, shippingLocation }) => ({
  deliveryDates: cart.deliveryDates,
  selectedShippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDeliveryDate);
