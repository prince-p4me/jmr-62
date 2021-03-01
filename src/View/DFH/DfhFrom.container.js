import React, { Component } from "react";
import { connect } from "react-redux";
import addressActions from "../../Store/Redux/address";
import dfhActions from "../../Store/Redux/dfh";
import DfhFromPage from "./DfhFrom.page";
import { Toast } from "native-base";

class DfhFrom extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidUpdate(prevProps, prevState) {
    let message = null;
    let { processed, error } = this.props;
    if (processed && error) {
      message = "PIN Code not serviced";
    }
    if (message) {
      Toast.show({
        text: message,
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }
    if (processed && !error) {
      this.props.navigation.navigate("DfhTo");
    }
  }

  goToNext = address => {
    let addressObj = {
      ...address,
      phone: address.mobile,
      zipCode: address.zip
    };
    this.props.setDfhFromAddress(addressObj);
    if (this.props.location.name) {
      let parameters = {
        locationId: this.props.location.id,
        zipCode: address.zip
      };
      this.props.checkZipCodeRequest(parameters);
      this.props.setDfhFromLocation(this.props.location.id);
    } else {
      Toast.show({
        text: "Please choose Pickup Location",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }
  };

  chooseLocation = () => {
    this.props.navigation.navigate("PickupLocation");
  };

  render() {
    return (
      <DfhFromPage
        goToNext={this.goToNext}
        chooseLocation={this.chooseLocation}
        location={this.props.location.name}
        fetching={this.props.fetching}
        currentPosition={0}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = ({ pickupLocation, dfh }) => ({
  location: pickupLocation.selectedPickupLocation,
  fetching: dfh.fetching,
  processed: dfh.processed,
  error: dfh.error
});

const mapDispatchToProps = { ...addressActions, ...dfhActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DfhFrom);
