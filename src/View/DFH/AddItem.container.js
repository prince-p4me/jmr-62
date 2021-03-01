import React, { Component } from "react";
import { connect } from "react-redux";
import dfhActions from "../../Store/Redux/dfh";
import AddItemForm from "./AddItemForm";

import { Toast } from "native-base";

class AddItem extends Component {
  addItem = form => {
    console.log(JSON.stringify(form));
    this.props.navigation.goBack();
    form = { ...form, packagingTypeId: form.packagingType.id };
    this.props.addItem(form);
  };

  closeModal = () => {
    this.props.navigation.goBack();
  };

  componentDidMount() {
    this.props.packagingTypesRequest();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { fetching, processed, tempToken, token } = nextProps;
    if (processed && !fetching) {
      this.props.navigation.popToTop(); // Reset all modal of modal stacks. (this is available since 1.0.0 I think).
      this.props.navigation.goBack(null); // Then close modal itself to display the main app screen nav.
      Toast.show({
        text: "Registered Successfully",
        buttonText: "Okay",
        duration: 3000
      });
    }

    return true;
  }

  render() {
    return (
      <AddItemForm
        onSubmit={this.addItem}
        fetching={this.props.fetching}
        packagingTypes={this.props.packagingTypes}
        closeModal={this.closeModal}
      />
    );
  }
}

const mapStateToProps = ({ dfh }) => ({
  packagingTypes: dfh.packagingTypes
});
const mapDispatchToProps = dfhActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
