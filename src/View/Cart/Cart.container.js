import React, { Component } from "react";
import { connect } from "react-redux";
import cartActions from "../../Store/Redux/cart";
import packingActions from "../../Store/Redux/packing";
import CartComponent from "./Cart.page";
import Constants from "../../Services/Constant";
import { Toast } from "native-base";

class Cart extends Component {
  static navigationOptions = {
    headerRight: null
  };

  componentDidMount() {
    this.getEarliestDelivery(this.props.sections);
    this.getMinValueDelivery(this.props.sections);
    // this.props.giftingTypesRequest(this.props.selectedShippingLocation.id);
  }

  getEarliestDelivery = sections => {
    let sourcingLocationIds = [];
    sections.forEach(section => {
      sourcingLocationIds.push(parseInt(section.sourcingLocationId));
    });
    let parameters = {
      shippingLocationId: parseInt(this.props.selectedShippingLocation.id),
      sourcingLocationIds
    };
    sourcingLocationIds.length > 0
      ? this.props.earliestDeliveryRequest(parameters)
      : null;
  };

  getMinValueDelivery = sections => {
    let sourcingLocationIds = [];
    sections.forEach(section => {
      sourcingLocationIds.push(parseInt(section.sourcingLocationId));
    });
    let parameters = {
      shippingLocationId: parseInt(this.props.selectedShippingLocation.id),
      sourcingLocationIds
    };
    sourcingLocationIds.length > 0
      ? this.props.minValueDeliveryRequest(parameters)
      : null;
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { sections } = nextProps;
    if (this.props.sections.length != sections.length) {
      this.getEarliestDelivery(sections);
    }
    return true;
  }

  changeDeliveryDate = section => {
    let parameters = {
      shippingLocationId: this.props.selectedShippingLocation.id,
      sourcingLocationId: section.sourcingLocationId
    };

    this.props.deliveryDatesRequest(parameters);
    this.props.navigation.navigate("SelectDeliveryDate", {
      sourcingLocationId: section.sourcingLocationId
    });
  };
  changeTimeSlot = section => {
    let parameters = {
      shippingLocationId: this.props.selectedShippingLocation.id,
      sourcingLocationId: section.sourcingLocationId,
      date: section.deliveryDate
    };

    this.props.timeSlotsRequest(parameters);
    this.props.navigation.navigate("SelectTimeSlot", {
      sourcingLocationId: section.sourcingLocationId
    });
  };

  incQty = product => {
    this.props.incQty(product);
  };
  decQty = product => {
    this.props.decQty(product);
  };

  checkOut = () => {
    if (this.props.sections.length > 0) {
      this.props.token
        ? this.props.navigation.navigate("ShippingAddress", {
          type: Constants.SHIPPING_ADDRESS,
          name: "Shipping Address"
        })
        : this.props.navigation.navigate("Login");
    } else {
      Toast.show({
        text: "Cart can't be empty!",
        buttonText: "Okay",
        duration: 3000
      });
    }
  };

  selectBagType = section => {
    this.props.navigation.navigate("SelectBagType", {
      sourcingLocationId: section.sourcingLocationId
    });
  };

  incBagQty = section => {
    this.props.incBagQty(section.sourcingLocationId);
  };

  decBagQty = section => {
    this.props.decBagQty(section.sourcingLocationId);
  };

  bagTypeOptions = {
    selectBagType: this.selectBagType,
    incBagQty: this.incBagQty,
    decBagQty: this.decBagQty
  };

  selectGiftingType = section => {
    this.props.navigation.navigate("SelectGiftingType", {
      sourcingLocationId: section.sourcingLocationId
    });
  };

  giftingTypeOptions = {
    selectGiftingType: this.selectGiftingType
  };

  render() {
    return this.props.sections ? (
      <CartComponent
        sections={this.props.sections}
        navigation={this.props.navigation}
        incQty={this.incQty}
        decQty={this.decQty}
        checkOut={this.checkOut}
        selectedShippingLocationName={this.props.selectedShippingLocation.name}
        changeDeliveryDate={this.changeDeliveryDate}
        changeTimeSlot={this.changeTimeSlot}
        bagTypeOptions={this.bagTypeOptions}
        giftingTypeOptions={this.giftingTypeOptions}
      />
    ) : null;
  }
}

const mapStateToProps = ({ cart, shippingLocation, authentication }) => ({
  sections: cart.sections,
  token: authentication.token,
  selectedShippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = { ...cartActions, ...packingActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
