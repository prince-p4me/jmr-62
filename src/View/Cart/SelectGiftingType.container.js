import React, { Component } from "react";
import { connect } from "react-redux";
import cartActions from "../../Store/Redux/cart";
import packingActions from "../../Store/Redux/packing";
import SelectElement from "../Components/SelectElement";

class SelectGiftingType extends Component {
  componentDidMount() {
    this.props.giftingTypesRequest(this.props.selectedShippingLocation.id);
  }
  giftingTypeSelected = giftingType => {
    let parameters = {
      sourcingLocationId: this.props.navigation.state.params.sourcingLocationId,
      giftingType
    };
    this.props.setGiftingType(parameters);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SelectElement
        items={this.props.giftingTypes}
        itemClicked={this.giftingTypeSelected}
        isItemString={false}
        title={"Select Gift Option"}
      />
    );
  }
}

const mapStateToProps = ({ packing, shippingLocation }) => ({
  giftingTypes: packing.giftingTypes,
  selectedShippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = { ...cartActions, ...packingActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectGiftingType);
