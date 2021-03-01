import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import AddressForm from "./AddressForm";

AddAddressForm = reduxForm({
  form: "dfhToAddress"
  // enableReinitialize: true
})(AddressForm);

const mapStateToProps = ({ profile }) => {
  if (profile.profile) {
    let { firstName, lastName, email, mobile } = profile.profile;
    return {
      initialValues: { firstName, lastName, email, mobile, countryId: "101" }
    };
  } else {
    return {};
  }
};

export default connect(
  mapStateToProps,
  null
)(AddAddressForm);
