import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/myOrder";
import DfhOrderDetailPage from "./DfhOrderDetail.page";
import LoadingIndicator from "../Components/LoadingIndicator";

class DfhOrderDetail extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return this.props.order ? (
      <DfhOrderDetailPage order={this.props.order}
        navigation={this.props.navigation} />
    ) : (
        <LoadingIndicator />
      );
  }
}

const mapStateToProps = ({ myOrder }) => ({
  order: myOrder.order
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DfhOrderDetail);
