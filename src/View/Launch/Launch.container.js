import React, { Component } from "react";
import { connect } from "react-redux";
import shippingLocationActions from "../../Store/Redux/shippingLocation";
import cartActions from "../../Store/Redux/cart";
import LocationChangePage from "./LocationChange.page";
import { Toast } from "native-base";
import RNRestart from 'react-native-restart';
import { Alert } from "react-native";

class LocationChange extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   static navigationOptions = {
  //     title: "SELECT YOUR CUP",
  //     headerTitleStyle: { textAlign: "center", alignSelf: "center" }
  //   };
  componentDidMount() {
    console.log("LocationChange")
    this.props.shippingLocationsRequest();
  }

  showALert = (location) => {
    Alert.alert("Are you sure?",
      "This will refresh the cart and restart the App",
      [
        {
          text: "Cancel", onPress: () => {
            // this.props.emptyCart();
            // RNRestart.Restart();
            console.log("cancel pressed");
            this.props.navigation.navigate("TabNavigator");
          }
        },
        {
          text: "Okay", onPress: () => {
            this.props.setShippingLocationRequest(location);
            this.props.emptyCart();
            Toast.show({ text: "Your application will restart in a while . . .", duration: 3000, buttonText: "Okay" });
            setTimeout(() => {
              RNRestart.Restart();
            }, 4000)
          }
        }
      ])
  }

  shippingLocationSelected = location => {
    if (this.props.selectedShippingLocation.id) {
      // Toast.show({ text: "Your application will restart . . .", duration: 3000, buttonText: "Okay" });
      this.showALert(location);
    } else if (this.props.sections && this.props.sections.length) {
      Toast.show({ text: "Your cart has been refreshed . . .", duration: 3000, buttonText: "Okay" });
      this.props.setShippingLocationRequest(location);
      this.props.emptyCart();
    } else {
      this.props.setShippingLocationRequest(location);
      this.props.navigation.navigate("TabNavigator");
    }
  };

  closeLocationSelector = () => {
    this.props.navigation.navigate("TabNavigator");
  };

  getShippingLocations = () => {
    if (Array.isArray(this.props.shippingLocations)) {
      return this.props.shippingLocations.map(location =>
        location.id == this.props.selectedShippingLocation.id
          ? { ...location, selected: true }
          : location
      )
    } else {
      return []
    }
  };

  render() {
    return (
      <LocationChangePage
        shippingLocations={this.getShippingLocations()}
        shippingLocationSelected={this.shippingLocationSelected}
        closeLocationSelector={this.closeLocationSelector}
        disabled={this.props.selectedShippingLocation.id ? false : true}
      />
    );
  }
}

const mapStateToProps = ({ shippingLocation, cart }) => ({
  shippingLocations: shippingLocation.shippingLocations,
  selectedShippingLocation: shippingLocation.selectedShippingLocation,
  sections: cart.sections
});

const mapDispatchToProps = { ...shippingLocationActions, ...cartActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationChange);