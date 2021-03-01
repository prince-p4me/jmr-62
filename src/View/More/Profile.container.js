import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/profile";
import ProfilePage from "./Profile.page";

class Profile extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    this.props.getProfileRequest({ token: this.props.token });
    this.props.loyaltyPointsRequest({ token: this.props.token });
  }

  editProfile = () => {
    this.props.navigation.navigate("EditProfile");
  };
  render() {
    return (
      <ProfilePage
        navigation={this.props.navigation}
        editProfile={this.editProfile}
        profile={this.props.profile}
      />
    );
  }
}

const mapStateToProps = ({ profile, authentication }) => ({
  profile: profile.profile,
  token: authentication.token
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
