import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/myOrder";
import MyOrdersPage from "./MyOrders.page";

class MyOrders extends Component {
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    this.props.myOrdersRequest({ token: this.props.token });
  }
  orderClicked = order => {
    let {
      token,
      orderDetailRequest,
      dfhOrderDetailRequest,
      navigation
    } = this.props;
    let parameters = {
      token,
      orderId: order.orderID
    };
    if (order.type == "SO") {
      orderDetailRequest(parameters);
      navigation.navigate("OrderDetail");
    } else {
      dfhOrderDetailRequest(parameters);
      navigation.navigate("DfhOrderDetail");
    }
  };
  render() {
    return (
      <MyOrdersPage
        navigation={this.props.navigation}
        orders={this.props.orders}
        orderClicked={this.orderClicked}
      />
    );
  }
}

const mapStateToProps = ({ myOrder, authentication }) => ({
  orders: myOrder.orders,
  token: authentication.token
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOrders);
