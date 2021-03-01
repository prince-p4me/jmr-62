import React from "react";
import { Form } from "native-base";

import { Field, reduxForm } from "redux-form";
import ButtonWithLoader from "./ButtonWithLoader";
import FormValidation from "../../Services/FormValidation";
import FormField from "./FormField";
import { connect } from "react-redux";

let CouponForm = ({ handleSubmit, pristine, reset, submitting, fetching }) => (
  <Form>
    <Field
      name="coupon"
      type="default"
      component={FormField}
      // validate={FormValidation.required}
      placeholder="Enter Coupon Code"
    />
    <ButtonWithLoader
      fetching={fetching}
      title="Apply Coupon"
      onPress={handleSubmit}
      transparent={true}
    />
  </Form>
);

CouponForm = reduxForm({
  form: "coupon", // a unique identifier for this form
  enableReinitialize: true
})(CouponForm);

const mapStateToProps = ({ order }) => ({
  initialValues: order
});

export default connect(
  mapStateToProps,
  null
)(CouponForm);
