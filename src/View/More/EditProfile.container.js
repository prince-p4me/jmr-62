import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/profile";
import EditProfileForm from "./EditProfileForm";

import { Toast } from "native-base";
import moment from "moment";

class EditProfile extends Component {
  static navigationOptions = {
    header: null
  }
  save = form => {
    if (form.dob) {
      form.dob = moment(form.dob).format("DD/MM/YYYY");
    }
    if (form.anniversary) {
      form.anniversary = moment(form.anniversary).format("DD/MM/YYYY");
    }
    form.token = this.props.token;
    this.props.editProfileRequest(form);
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { fetching, processed } = nextProps;
    if (processed && !fetching) {
      this.props.getProfileRequest({ token: this.props.token });
      this.props.navigation.goBack(); // Then close modal itself to display the main app screen nav.
      Toast.show({
        text: "Profile Updated Successfully",
        buttonText: "Okay",
        duration: 3000
      });
    }

    return true;
  }

  render() {
    return (
      <EditProfileForm
        navigation={this.props.navigation}
        onSubmit={this.save}
        mobile={this.props.mobile}
        fetching={this.props.fetching}
      />
    );
  }
}

const mapStateToProps = ({ authentication, profile }) => ({
  fetching: profile.fetching,
  processed: profile.processed,
  mobile: authentication.mobile,
  token: authentication.token
});
const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
