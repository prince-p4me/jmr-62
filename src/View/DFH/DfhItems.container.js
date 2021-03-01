import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/dfh";
import DfhItemsPage from "./DfhItems.page";
import { Toast } from "native-base";

class DfhItems extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidUpdate(prevProps, prevState) {
    let { weightCheck } = this.props.dfh;
    if (weightCheck.success && weightCheck.success == 1) {
      this.props.navigation.navigate("DfhPreference");
      this.props.resetWeightCheck();
    } else if (weightCheck.success && weightCheck.success == -1) {
      Toast.show({
        text: weightCheck.error_msg,
        buttonText: "Okay",
        duration: 3000
      });
      this.props.resetWeightCheck();
    }
  }

  goToNext = () => {
    if (this.props.dfh.items.length == 0) {
      Toast.show({
        text: "Please Add Items!",
        buttonText: "Okay",
        duration: 3000
      });
      return;
    }

    let { from, to, items } = this.props.dfh;
    let parameters = {
      fromLocationId: from.locationId,
      toLocationId: to.locationId,
      products: items
    };
    this.props.checkMaxWeightRequest(parameters);
  };

  addItem = () => {
    this.props.navigation.navigate("DfhAddItem");
  };

  removeItem = index => {
    this.props.removeItem(index);
  };
  render() {
    return (
      <DfhItemsPage
        navigation={this.props.navigation}
        goToNext={this.goToNext}
        addItem={this.addItem}
        items={this.props.dfh.items}
        currentPosition={2}
        removeItem={this.props.removeItem}
      />
    );
  }
}

const mapStateToProps = ({ dfh }) => ({
  dfh
});

const mapDispatchToProps = { ...actions };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DfhItems);
