import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/cart";
import HeaderIcon from "../Components/HeaderIcon";

class CartIcon extends Component {
  render() {
    return (
      <HeaderIcon
        icon="shopping-bag"
        onPress={() => this.props.navigation.navigate("Cart")}
        count={this.props.sections.reduce(
          (acc, section) => acc + section.products.length,
          0
        )}
      />
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  sections: cart.sections
});

const mapDispatchToProps = actions;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
