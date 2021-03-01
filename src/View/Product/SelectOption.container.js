import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/product";
import SelectElement from "./SelectElement.page";

class SelectOption extends Component {
  optionSelected = option => {
    let parameters = {
      selectedValue: option,
      no: this.props.navigation.state.params.option.no
    };
    this.props.setProductOptions(parameters);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <SelectElement
        items={this.props.navigation.state.params.option.option}
        itemClicked={this.optionSelected}
        isItemString={true}
        title={this.props.navigation.state.params.option.title}
      />
    );
  }
}

const mapDispatchToProps = actions;
export default connect(
  null,
  mapDispatchToProps
)(SelectOption);
