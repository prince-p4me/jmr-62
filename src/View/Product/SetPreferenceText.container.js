import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/product";
import SetPreferenceTextPage from "./SetPreferenceText.page";
class SetPreferenceText extends Component {
  saveText = ({ preferenceText }) => {
    let parameters = {
      selectedValue: preferenceText,
      no: this.props.navigation.state.params.option.no
    };
    this.props.setProductOptions(parameters);
    this.props.navigation.goBack();
  };
  cancel = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SetPreferenceTextPage
        title={this.props.navigation.state.params.option.title}
        saveText={this.saveText}
        cancel={this.cancel}
      />
    );
  }
}

// const mapStateToProps = ({ cart }) => ({
//   timeSlots: cart.timeSlots
// });

const mapDispatchToProps = actions;
export default connect(
  null,
  mapDispatchToProps
)(SetPreferenceText);
