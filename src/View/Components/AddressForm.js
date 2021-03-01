import React from "react";
import ButtonWithLoader from "./ButtonWithLoader";
import { View } from "react-native";

import FormNewAddress from "./FormNewAddress";

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

export default AddAddressForm;
