import React, { Component } from "react";
import { connect } from "react-redux";
import addressActions from "../../Store/Redux/address";
import geoActions from "../../Store/Redux/geo";
import AddAddressPage from "./AddAddress.page";

class AddAddress extends Component {
  componentDidMount() {
    this.props.countriesRequest();
    this.props.statesRequest(101);
  }

  getCities = stateId => {
    this.props.citiesRequest(stateId);
  };

  addAddress = address => {
    let paramaters = {
      token: this.props.token,
      address
    };
    this.props.createAddressRequest(paramaters);
    this.closeModal();
  };

  closeModal = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <AddAddressPage
        navigation={this.props.navigation}
        closeModal={this.closeModal}
        addAddress={this.addAddress}
        countries={this.props.countries}
        states={this.props.states}
        cities={this.props.cities}
        getCities={this.getCities}
      />
    );
  }
}

const mapStateToProps = ({ authentication, geo }) => ({
  token: authentication.token,
  countries: geo.countries,
  states: geo.states,
  cities: geo.cities
});

const mapDispatchToProps = { ...addressActions, ...geoActions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAddress);
