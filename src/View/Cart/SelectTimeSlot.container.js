import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/cart";
import SelectElement from "../Components/SelectElement";

class SelectTimeSlot extends Component {
  timeSlotSelected = timeSlot => {
    let parameters = {
      sourcingLocationId: this.props.navigation.state.params.sourcingLocationId,
      timeSlot: timeSlot
    };
    this.props.setTimeSlot(parameters);
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

const mapStateToProps = ({ cart }) => ({
  timeSlots: cart.timeSlots
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTimeSlot);
