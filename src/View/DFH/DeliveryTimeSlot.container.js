import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/dfh";
import SelectElement from "../Components/SelectElement";

class DeliveryTimeSlot extends Component {
  componentDidMount() {
    let parameters = {
      fromLocationId: this.props.pickupLocation.id,
      toLocationId: this.props.deliveryLocation.id,
      deliveryDate: this.props.delivery.date
    };

    this.props.dfhDeliveryTimeSlotsRequest(parameters);
  }
  timeSlotSelected = time => {
    this.props.setDeliveryTimeSlot(time);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SelectElement
        items={this.props.timeSlots}
        itemClicked={this.timeSlotSelected}
        isItemString={true}
        title={"Select Time Slot"}
      />
    );
  }
}

const mapStateToProps = ({ dfh, pickupLocation }) => ({
  timeSlots: dfh.timeSlots,
  deliveryLocation: dfh.selectedDeliveryLocation,
  pickupLocation: pickupLocation.selectedPickupLocation,
  delivery: dfh.delivery
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryTimeSlot);
