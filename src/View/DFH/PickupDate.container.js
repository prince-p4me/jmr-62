import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/dfh";
import SelectElement from "../Components/SelectElement";

class PickupDate extends Component {
  // static navigationOptions = {
  //   header: null
  // }

  componentDidMount() {
    let parameters = {
      fromLocationId: this.props.pickupLocation.id,
      toLocationId: this.props.deliveryLocation.id,
      deliveryDate: this.props.delivery.date,
      deliveryTimeSlot: this.props.delivery.time
    };
    this.props.dfhPickupDatesRequest(parameters);
  }
  dateSelected = selectedDate => {
    this.props.setDfhPickupDate(selectedDate);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SelectElement
        items={this.props.dates}
        itemClicked={this.dateSelected}
        isItemString={true}
        title={"Select Pickup Date"}
      />
    );
  }
}

const mapStateToProps = ({ dfh, pickupLocation }) => ({
  dates: dfh.dates,
  deliveryLocation: dfh.selectedDeliveryLocation,
  pickupLocation: pickupLocation.selectedPickupLocation,
  delivery: dfh.delivery
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickupDate);
