import React, { Component } from "react";
import { connect } from "react-redux";
import addressActions from "../../Store/Redux/dfh";
import DfhToPage from "./DfhTo.page";
import { Toast } from "native-base";

class DfhTo extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this.props.dfhReset();
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
      this.props.navigation.navigate("DfhItems");
    }
  }

  goToNext = address => {
    let addressObj = {
      ...address,
      phone: address.mobile,
      zipCode: address.zip
    };
    this.props.setDfhToAddress(addressObj);
    if (this.props.location.name) {
      let parameters = {
        locationId: this.props.location.id,
        zipCode: address.zip
      };
      this.props.checkZipCodeRequest(parameters);
      this.props.setDfhToLocation(this.props.location.id);
    } else {
      Toast.show({
        text: "Please choose Delivery Location",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }
  };

  chooseLocation = () => {
    this.props.navigation.navigate("DeliveryLocation");
  };

  render() {
    return (
      <DfhToPage
        navigation={this.props.navigation}
        goToNext={this.goToNext}
        chooseLocation={this.chooseLocation}
        location={this.props.location.name}
        fetching={this.props.fetching}
        currentPosition={1}
      />
    );
  }
}

const mapStateToProps = ({ dfh }) => ({
  location: dfh.selectedDeliveryLocation,
  fetching: dfh.fetching,
  processed: dfh.processed,
  error: dfh.error
});

const mapDispatchToProps = { ...addressActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DfhTo);
