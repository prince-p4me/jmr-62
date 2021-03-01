import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/dfh";
import SelectElement from "../Components/SelectElement";

class DeliveryDate extends Component {
  componentDidMount() {
    let parameters = {
      fromLocationId: this.props.pickupLocation.id,
      toLocationId: this.props.deliveryLocation.id
    };
    this.props.dfhDeliveryDatesRequest(parameters);
  }
  dateSelected = selectedDate => {
    this.props.setDfhDeliveryDate(selectedDate);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SelectElement
        items={this.props.dates}
        itemClicked={this.dateSelected}
        isItemString={true}
        title={"Select Delivery Date"}
      />
    );
  }
}

const mapStateToProps = ({ dfh, pickupLocation }) => ({
  dates: dfh.dates,
  deliveryLocation: dfh.selectedDeliveryLocation,
  pickupLocation: pickupLocation.selectedPickupLocation
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryDate);
