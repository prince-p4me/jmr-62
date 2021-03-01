import React, { Component } from "react";
import { connect } from "react-redux";
import pickupLocationActions from "../../Store/Redux/pickupLocation";
import SelectElement from "../Components/SelectElement";

class SelectPickupLocation extends Component {
  // static navigationOptions = {
  //   header: null
  // }

  componentDidMount() {
    this.props.pickupLocationsRequest();
  }
  pickupLocationSelected = pickupLocation => {
    this.props.setPickupLocation(pickupLocation);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SelectElement
        navigation={this.props.navigation}
        items={this.props.pickupLocations}
        itemClicked={this.pickupLocationSelected}
        isItemString={false}
        title={"Select Pickup Location"}
      />
    );
  }
}

const mapStateToProps = ({ pickupLocation }) => ({
  pickupLocations: pickupLocation.pickupLocations
});

const mapDispatchToProps = pickupLocationActions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPickupLocation);
