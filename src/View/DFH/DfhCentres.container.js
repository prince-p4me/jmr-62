import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/dfh";
import DfhCentresPage from "./DfhCentres.page";
import Constants from "../../Services/Constant";

class DfhCentres extends Component {
  selectCentre = centre => {
    if (this.props.navigation.state.params.type == Constants.FROM) {
      this.props.setPickupDfhCentre(centre);
    } else {
      this.props.setDeliveryDfhCentre(centre);
    }
    this.props.navigation.goBack();
  };
  getDfhCentres = () => {
    if (this.props.navigation.state.params.type == Constants.FROM) {
      return this.props.dfhPickupCentres;
    } else {
      return this.props.dfhDeliveryCentres;
    }
  };
  onCancel = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <DfhCentresPage
        dfhCentres={this.getDfhCentres()}
        selectCentre={this.selectCentre}
        onCancel={this.onCancel}
        title={"Select DFH Centre"}
      />
    );
  }
}

const mapStateToProps = ({ dfh, pickupLocation }) => ({
  dfhDeliveryCentres: dfh.dfhDeliveryCentres,
  dfhPickupCentres: dfh.dfhPickupCentres,
  deliveryLocation: dfh.selectedDeliveryLocation,
  pickupLocation: pickupLocation.selectedPickupLocation
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DfhCentres);
