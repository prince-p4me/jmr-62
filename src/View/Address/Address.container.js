import React, { Component } from "react";
import { connect } from "react-redux";
import addressActions from "../../Store/Redux/address";
import profileActions from "../../Store/Redux/profile";
import AddressPage from "./Address.page";
import Constants from "../../Services/Constant";
import { Toast } from "native-base";
import { Alert } from "react-native";
import Constant from "../../Services/Constant";

class Address extends Component {
  componentDidMount() {
    console.log("Address")
    this.fetchAddress();
  }

  fetchAddress = () => {
    let parameters = {
      shippingLocationId: this.props.shippingLocation.id,
      token: this.props.token
    };
    if (this.props.navigation.state.params.type == Constants.SHIPPING_ADDRESS) {
      this.props.shippingAddressRequest(parameters);
    } else {
      this.props.billingAddressRequest(parameters);
    }
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { newAddressCreated } = nextProps;
    if (newAddressCreated) {
      this.fetchAddress();
    }
    return true;
  }

  addAddress = () => {
    this.props.navigation.navigate("AddAddress");
    this.props.getProfileRequest({ token: this.props.token });
  };

  showALert = () => {
    Alert.alert("Location mismatched",
      "Kindly change your address with your selected city for shipping",
      [
        { text: "Okay", onPress: () => console.log("OK Pressed") }
      ])
  }

  next = async () => {
    if (this.props.navigation.state.params.type == Constants.SHIPPING_ADDRESS) {
      if (!await this.canShipToThisAddress() && this.props.shippingAddresses.length) {
        // debugger;
        this.showALert();
      } else if (this.props.shippingAddresses.length > 0 && await this.canShipToThisAddress()) {
        // debugger;
        this.props.navigation.navigate("BillingAddress", {
          type: Constants.BILLING_ADDRESS,
          name: "Billing Address"
        });
      } else {
        Toast.show({
          text: "Shipping Address is Needed!",
          buttonText: "Okay",
          duration: 3000
        });
      }
    } else {
      if (this.props.shippingAddresses.length > 0) {
        this.props.navigation.navigate("OrderSummary");
      } else {
        Toast.show({
          text: "Billing Address is Needed!",
          buttonText: "Okay",
          duration: 3000
        });
      }
    }
  };

  isPincodeVerified = async (pinCode) => {
    let url = (Constant.API_URL + "getVerifyPincode/" + this.props.shippingLocation.id + "/" + pinCode);
    console.log("url is:==", url);
    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      // debugger
      response = await response.json();
      if (response && response.message) {
        return response.status;
      } else if (response && !response.message) {
        return response;
      }
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      Toast.show({ text: "Couldn't verified pincode . . .", duration: 3000, buttonText: "Okay" })
      return false;
    }
  }

  canShipToThisAddress = async () => {
    let { shippingLocation, shippingAddresses } = this.props;
    const cities = ["gurugram", "gurgaon"];
    const cities1 = ["delhi", "new delhi"];
    let address = {};
    for (let i = 0; i < shippingAddresses.length; i++) {
      if (shippingAddresses[i].selected) {
        address = shippingAddresses[i];
        break;
      };
    }
    if (address) {
      let city = address.city_name.toLowerCase();
      let city1 = shippingLocation.name.toLowerCase();
      if (await this.isPincodeVerified(address.zip)) {
        // debugger;
        return true;
      }
      // else if (((city == city1) || (cities.includes(city) && cities.includes(city1)) || (cities1.includes(city) && cities1.includes(city1)))) {
      //   // debugger;
      //   return true;
      // }
    }
    return false;
  }

  selectAddress = address => {
    let { navigation, selectShippingAddress, selectBillingAddress } = this.props;
    if (navigation.state.params.type == Constants.SHIPPING_ADDRESS) {
      selectShippingAddress(address.address_id)
    } else {
      selectBillingAddress(address.address_id);
    }
  };

  static navigationOptions = {
    headerRight: null
  };

  render() {
    return (
      <AddressPage
        navigation={this.props.navigation}
        title={this.props.navigation.state.params.name}
        addresses={
          this.props.navigation.state.params.type == Constants.SHIPPING_ADDRESS
            ? this.props.shippingAddresses
            : this.props.billingAddresses
        }
        selectAddress={this.selectAddress}
        next={this.next}
        addAddress={this.addAddress}
      />
    );
  }
}

const mapStateToProps = ({ address, shippingLocation, authentication }) => ({
  shippingAddresses: address.shippingAddresses,
  billingAddresses: address.billingAddresses,
  newAddressCreated: address.newAddressCreated,
  shippingLocation: shippingLocation.selectedShippingLocation,
  token: authentication.token
});

const mapDispatchToProps = { ...addressActions, ...profileActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);