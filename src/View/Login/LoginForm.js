import React from "react";
import { Container, Button, Icon, Content, Text, Left, Item, Input, Form } from "native-base";

import { Field, reduxForm } from "redux-form";
import ButtonWithLoader from "../Components/ButtonWithLoader";
import { Colors } from "../Themes";
const validate = values => {
  const errors = {};
  if (!values.mobile) {
    errors.mobile = "Required";
  }
  //  else if (values.mobile.length != 10) {
  //   errors.mobile = "Must be 10 digits";
  // }
  return errors;
};

renderInput = ({
  input,
  placeholder,
  type, navigation,
  meta: { touched, error, warning }
}) => {
  var hasError = false;
  if (error !== undefined && touched) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <Button style={{ backgroundColor: Colors.lightCharcoal, marginLeft: -15 }}
        onPress={() => {
          navigation.navigate("CountryList")
        }}>
        <Text style={{ color: "black" }}>IN   +91</Text>
      </Button>
      <Input
        {...input}
        keyboardType={type}
        placeholder={placeholder}
      />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
};

const LoginForm = ({ handleSubmit, pristine, navigation, submitting, fetching }) => (
  <Container>
    <Content padder>
      <Form>
        <Field
          name="mobile"
          navigation={navigation}
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
