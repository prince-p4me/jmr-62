import React from "react";
import { Container, Content, Text, Item, Input, Form } from "native-base";

import { Field, reduxForm } from "redux-form";
import ButtonWithLoader from "../Components/ButtonWithLoader";
const validate = values => {
  const errors = {};
  if (!values.mobile) {
    errors.mobile = "Required";
  } else if (values.mobile.length != 10) {
    errors.mobile = "Must be 10 digits";
  }
  return errors;
};

renderInput = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => {
  var hasError = false;
  if (error !== undefined && touched) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <Input
        {...input}
        keyboardType={type}
        placeholder={placeholder}
        maxLength={10}
      />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
};

const LoginForm = ({ handleSubmit, pristine, reset, submitting, fetching }) => (
  <Container>
    <Content padder>
      <Form>
        <Field
          name="mobile"
          type="number-pad"
          component={renderInput}
          placeholder="Enter Mobile Number"
        />
        <ButtonWithLoader
          fetching={fetching}
          title="Send OTP"
          onPress={handleSubmit}
        />
      </Form>
    </Content>
  </Container>
);

export default reduxForm({
  form: "login", // a unique identifier for this form
  validate
})(LoginForm);
