import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/dfh";
import SelectElement from "../Components/SelectElement";

class PickupTimeSlot extends Component {
  // static navigationOptions = {
  //   header: null
  // }

  componentDidMount() {
    let parameters = {
      fromLocationId: this.props.pickupLocation.id,
      toLocationId: this.props.deliveryLocation.id,
      deliveryDate: this.props.delivery.date,
      pickupDate: this.props.pickUp.date,
      deliveryTimeSlot: this.props.delivery.time
    };
    this.props.dfhPickupTimeSlotsRequest(parameters);
  }
  timeSlotSelected = time => {
    this.props.setPickupTimeSlot(time);
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
  pickupLocation: pickupLocation.selectedPickupLocation,
  deliveryLocation: dfh.selectedDeliveryLocation,
  delivery: dfh.delivery,
  pickUp: dfh.pickUp
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickupTimeSlot);
