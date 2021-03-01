import React from "react";
import { Container, Content } from "native-base";
import { reduxForm } from "redux-form";
import Label from "../Components/Label";
import ProfileForm from "../Components/ProfileForm";

const RegisterForm = ({
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
      <ProfileForm handleSubmit={handleSubmit} register={true} fetching={fetching} />
    </Content>
  </Container>
);

export default reduxForm({
  form: "register" // a unique identifier for this form
})(RegisterForm);
