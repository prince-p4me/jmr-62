import React from "react";
import { Container, Content } from "native-base";
import { reduxForm } from "redux-form";
import Label from "../Components/Label";
import ProfileForm from "../Components/ProfileForm";
import { connect } from "react-redux";
import CustomHeader from "../Components/CustomHeader";

let EditProfileForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  mobile, navigation,
  fetching
}) => (
  <Container>
    <CustomHeader navigation={navigation} title="Edit Profile"></CustomHeader>

    <Content padder>
      <Label text={mobile} />
      <ProfileForm handleSubmit={handleSubmit} fetching={fetching} />
    </Content>
  </Container>
);

EditProfileForm = reduxForm({
  form: "editProfile", // a unique identifier for this form
  enableReinitialize: true
})(EditProfileForm);

const mapStateToProps = ({ profile }) => ({
  initialValues: profile.profile
});

export default connect(
  mapStateToProps,
  null
)(EditProfileForm);
