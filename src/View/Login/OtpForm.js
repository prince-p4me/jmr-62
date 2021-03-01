import React from "react";
import {
  Container,
  Content,
  View,
  Button,
  Text,
  Item,
  Input,
  Form
} from "native-base";
import ButtonWithLoader from "../Components/ButtonWithLoader";
import FormField from "../Components/FormField";

import { Field, reduxForm } from "redux-form";
import Label from "../Components/Label";
const validate = values => {
  const errors = {};
  if (!values.otp) {
    errors.otp = "Required";
  } else if (values.otp.length != 4) {
    errors.otp = "Must be 4 digits";
  }
  return errors;
};

const OtpForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  mobile,
  fetching
}) => (
  <Container>
    <Content padder>
      <Label text={mobile} />
      <Form>
        <Field
          name="otp"
          type="number-pad"
          component={FormField}
          placeholder="Enter OTP"
        />

        <ButtonWithLoader
          fetching={fetching}
          title="Verify"
          onPress={handleSubmit}
        />
      </Form>
    </Content>
  </Container>
);

export default reduxForm({
  form: "otp", // a unique identifier for this form
  validate
})(OtpForm);
