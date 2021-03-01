import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import React from "react";
import ButtonWithLoader from "./ButtonWithLoader";
import { View } from "react-native";

import FormNewAddress from "./FormDfhFromAddress";

let AddAddressForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  fetching,
  closeModal,
  countries,
  states,
  cities,
  getCities,
  isModal,
  buttonText
}) => (
  <View>
    <FormNewAddress
      countries={countries}
      states={states}
      cities={cities}
      getCities={getCities}
    />
    <ButtonWithLoader
      fetching={fetching}
      title={buttonText ? buttonText : "Submit"}
      onPress={handleSubmit}
    />
    {isModal ? (
      <ButtonWithLoader
        fetching={fetching}
        title="Cancel"
        onPress={closeModal}
        transparent={true}
      />
    ) : null}
  </View>
);

AddAddressForm = reduxForm({
  form: "dfhFromAddress",
  enableReinitialize: true
})(AddAddressForm);

const mapStateToProps = ({ profile }) => {
  if (profile.profile) {
    let { firstName, lastName, email, mobile } = profile.profile;
    return {
      initialValues: { firstName, lastName, email, mobile, countryId: "101" }
    };
  } else {
    return {};
  }
};

export default connect(
  mapStateToProps,
  null
)(AddAddressForm);
