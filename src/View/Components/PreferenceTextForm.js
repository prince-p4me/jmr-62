import React from "react";
import { Form } from "native-base";

import { Field, reduxForm } from "redux-form";
import ButtonWithLoader from "./ButtonWithLoader";
import FormValidation from "../../Services/FormValidation";
import FormField from "./FormField";
import { connect } from "react-redux";

let PreferenceTextForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  fetching,
  title
}) => (
  <Form>
    <Field
      name="preferenceText"
      type="default"
      component={FormField}
      validate={FormValidation.required}
      placeholder={"Enter Text Here"}
    />
    <ButtonWithLoader
      fetching={fetching}
      title="Submit"
      onPress={handleSubmit}
    />
  </Form>
);

PreferenceTextForm = reduxForm({
  form: "preferenceText", // a unique identifier for this form
  enableReinitialize: true
})(PreferenceTextForm);

const mapStateToProps = ({ cart }) => ({
  initialValues: cart
});

export default connect(
  mapStateToProps,
  null
)(PreferenceTextForm);
