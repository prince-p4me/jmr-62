import React from "react";
import { Form } from "native-base";
import { Field } from "redux-form";
import ButtonWithLoader from "../Components/ButtonWithLoader";
import FormField from "../Components/FormField";
import FormDatePicker from "../Components/FormDatePicker";
import FormValidation from "../../Services/FormValidation";

const ProfileForm = ({ handleSubmit, register, fetching }) => (
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
      name="dob"
      type="default"
      component={FormDatePicker}
      placeholder="Date of birth"
    />
    <Field
      name="anniversary"
      type="default"
      component={FormDatePicker}
      placeholder="Date of Anniversary"
    />
    {register && <Field
      name="referralCode"
      type="default"
      component={FormField}
      placeholder="Referral Code"
    />}
    <ButtonWithLoader
      fetching={fetching}
      title="Submit"
      onPress={handleSubmit}
    />
  </Form>
);

export default ProfileForm;
