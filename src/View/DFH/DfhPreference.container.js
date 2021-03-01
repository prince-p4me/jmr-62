import React, { Component } from "react";
import { connect } from "react-redux";
import DfhPreferencePage from "./DfhPreference.page";
import { Toast } from "native-base";
import actions from "../../Store/Redux/dfh";
import Constant from "../../Services/Constant";

class DfhPreference extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    this.props.dfhDeliveryCentresRequest(this.props.deliveryLocation.id);
    this.props.dfhPickupCentresRequest(this.props.pickupLocation.id);
  }
  goToNext = () => {
    if (!this.props.pickUp.time) {
      Toast.show({
        text: "Please choose Pickup Time!",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }
    if (!this.props.delivery.needed && !this.props.delivery.centreId) {
      Toast.show({
        text: "Please choose Home Delivery or DFH Centre!",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }
    if (!this.props.pickUp.needed && !this.props.pickUp.centreId) {
      Toast.show({
        text: "Please choose Home Pickup or DFH Centre!",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }

    this.props.token
      ? this.props.navigation.navigate("DfhSummary")
      : this.props.navigation.navigate("Login");
  };

  changeDeliveryDate = () => {
    this.props.navigation.navigate("DfhDeliveryDate");
  };
  changeDeliveryTimeSlot = () => {
    if (!this.props.delivery.date) {
      Toast.show({
        text: "Please choose Delivery Date!",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }
    this.props.navigation.navigate("DfhDeliveryTimeSlot");
  };
  changePickupDate = () => {
    if (!this.props.delivery.time) {
      Toast.show({
        text: "Please choose Delivery Time!",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }
    this.props.navigation.navigate("DfhPickupDate");
  };
  changePickupTimeSlot = () => {
    if (!this.props.pickUp.date) {
      Toast.show({
        text: "Please choose Pickup Date!",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }
    this.props.navigation.navigate("DfhPickupTimeSlot");
  };
  changeHomeDeliveryStatus = () => {
    this.props.changeHomeDeliveryStatus();
  };
  changeHomePickupStatus = () => {
    this.props.changeHomePickupStatus();
  };
  selectDeliveryDfhCentre = () => {
    console.log("DFH centre");
    this.props.navigation.navigate("DfhCentres", { type: Constant.TO });
  };
  selectDeliveryDfhCentre = () => {
    console.log("DFH centre");
    this.props.navigation.navigate("DfhCentres", { type: Constant.TO });
  };
  selectPickupDfhCentre = () => {
    console.log("DFH centre");
    this.props.navigation.navigate("DfhCentres", { type: Constant.FROM });
  };
  render() {
    return (
      <DfhPreferencePage
        navigation={this.props.navigation}
        changeDeliveryDate={this.changeDeliveryDate}
        changeDeliveryTimeSlot={this.changeDeliveryTimeSlot}
        changePickupDate={this.changePickupDate}
        changePickupTimeSlot={this.changePickupTimeSlot}
        changeHomeDeliveryStatus={this.changeHomeDeliveryStatus}
        changeHomePickupStatus={this.changeHomePickupStatus}
        selectDeliveryDfhCentre={this.selectDeliveryDfhCentre}
        selectPickupDfhCentre={this.selectPickupDfhCentre}
        goToNext={this.goToNext}
        delivery={this.props.delivery}
        pickUp={this.props.pickUp}
        currentPosition={2}
        dfhDeliveryCentres={this.props.dfhDeliveryCentres}
        dfhPickupCentres={this.props.dfhPickupCentres}
      />
    );
  }
}

const mapStateToProps = ({ dfh, pickupLocation, authentication }) => ({
  delivery: dfh.delivery,
  pickUp: dfh.pickUp,
  dfhDeliveryCentres: dfh.dfhDeliveryCentres,
  dfhPickupCentres: dfh.dfhPickupCentres,
  deliveryLocation: dfh.selectedDeliveryLocation,
  pickupLocation: pickupLocation.selectedPickupLocation,
  token: authentication.token
});
const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DfhPreference);
