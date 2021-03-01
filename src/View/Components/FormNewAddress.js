import React from "react";
import FormField from "../Components/FormField";
import FormPicker from "../Components/FormPicker";
import { Field } from "redux-form";
import FormValidation from "../../Services/FormValidation";
import { Form, Item } from "native-base";

const FormNewAddress = ({ countries, states, cities, getCities }) => (
  <Form>
    <Field
      name="firstName"
      type="default"
      component={FormField}
      validate={FormValidation.required}
      placeholder="Enter First Name"
    />
    <Field
      name="lastName"
      type="default"
      component={FormField}
      validate={FormValidation.required}
      placeholder="Enter Last Name"
    />
    <Field
      name="email"
      type="email-address"
      component={FormField}
      validate={[FormValidation.required, FormValidation.email]}
      placeholder="Enter Email"
    />
    <Field
      name="mobile"
      type="number-pad"
      component={FormField}
      validate={[FormValidation.required, FormValidation.number]}
      placeholder="Enter Mobile"
    />
    <Field
      name="address1"
      type="default"
      component={FormField}
      validate={FormValidation.required}
      placeholder="Address Line 1"
    />
    <Field
      name="address2"
      type="default"
      component={FormField}
      placeholder="Address Line 2"
    />
    {countries ? (
      <Field
        name="countryId"
        mode="dropdown"
        component={FormPicker}
        validate={FormValidation.required}
        placeholder={"Select Country"}
      >
        {countries.map(country => (
          <Item label={country.name} value={country.id} key={country.id} />
        ))}
      </Field>
    ) : null}
    {states ? (
      <Field
        name="stateId"
        mode="dropdown"
        component={FormPicker}
        validate={FormValidation.required}
        placeholder={"Select State"}
        getCities={getCities}
      >
        {states.map(state => (
          <Item label={state.name} value={state.id} key={state.id} />
        ))}
      </Field>
    ) : null}
    {cities ? (
      <Field
        name="cityId"
        mode="dropdown"
        component={FormPicker}
        validate={FormValidation.required}
        placeholder={"Select City"}
      >
        {cities.map(city => (
          <Item label={city.name} value={city.id} key={city.id} />
        ))}
      </Field>
    ) : null}
    <Field
      name="zip"
      type="number-pad"
      component={FormField}
      validate={[FormValidation.required, FormValidation.number]}
      placeholder="Enter Pin Code"
    />
  </Form>
);

export default FormNewAddress;
