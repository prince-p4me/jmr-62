import React, { Component } from "react";
import { connect } from "react-redux";
import cartActions from "../../Store/Redux/cart";
import packingActions from "../../Store/Redux/packing";
import SelectElement from "../Components/SelectElement";

class SelectBagType extends Component {
  componentDidMount() {
    this.props.bagTypesRequest(this.props.selectedShippingLocation.id);
  }
  bagTypeSelected = bagType => {
    let parameters = {
      sourcingLocationId: this.props.navigation.state.params.sourcingLocationId,
      bagType
    };
    this.props.setBagType(parameters);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SelectElement
        items={this.props.bagTypes}
        itemClicked={this.bagTypeSelected}
        isItemString={false}
        title={"Select type of Bag"}
      />
    );
  }
}

const mapStateToProps = ({ packing, shippingLocation }) => ({
  bagTypes: packing.bagTypes,
  selectedShippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = { ...cartActions, ...packingActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectBagType);
