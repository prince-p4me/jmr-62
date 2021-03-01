import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/product";
import SelectElement from "./SelectElement.page";

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: this.props.navigation.state.params.option.selectedValue
        ? this.props.navigation.state.params.option.selectedValue
        : []
    };
  }
  optionSelected = option => {
    let selections = this.state.selections;
    let index = selections.findIndex(selection => selection === option.name);
    if (index > -1) {
      this.setState({
        ...this.state,
        selections: [
          ...selections.slice(0, index),
          ...selections.slice(index + 1)
        ]
      });
    } else {
      this.setState({
        ...this.state,
        selections: [...selections, option.name]
      });
    }
  };

  submitSelection = () => {
    let parameters = {
      selectedValue: this.state.selections,
      no: this.props.navigation.state.params.option.no
    };
    this.props.setProductOptions(parameters);
    this.props.navigation.goBack();
  };

  getItems = () =>
    this.props.navigation.state.params.option.option.map(option => ({
      id: option,
      name: option,
      selected:
        this.state.selections.findIndex(selection => selection === option) > -1
          ? true
          : false
    }));

  render() {
    return (
      <SelectElement
        items={this.getItems()}
        itemClicked={this.optionSelected}
        isItemString={false}
        title={this.props.navigation.state.params.option.title}
        isMultiSelect={true}
        close={this.close}
        submitSelection={this.submitSelection}
      />
    );
  }
}

const mapDispatchToProps = actions;
export default connect(
  null,
  mapDispatchToProps
)(MultiSelect);
