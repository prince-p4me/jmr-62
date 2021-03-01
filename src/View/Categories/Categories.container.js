import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/category";
import CategoriesPage from "./Categories.page";
import Constants from "../../Services/Constant";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   static navigationOptions = {
  //     title: "SELECT YOUR CUP",
  //     headerTitleStyle: { textAlign: "center", alignSelf: "center" }
  //   };
  componentDidMount() {
    let parameters = {
      shippingLocationId: this.props.shippingLocation.id
    };

    this.props.categoriesRequest(parameters);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { shippingLocation } = nextProps;
    if (shippingLocation.id != this.props.shippingLocation.id) {
      let parameters = {
        shippingLocationId: shippingLocation.id
      };

      this.props.categoriesRequest(parameters);
    }
    return true;
  }

  bannerClicked = item => {
    this.props.navigation.navigate("SubCategories", {
      type: Constants.SUB_CATEGORY,
      categoryId: item.id,
      name: item.name
    });

    // this.props.navigation.navigate("ProductList", {
    //   itemId: id,
    //   type: this.props.navigation.state.params.type
    // });
  };
  render() {
    return (
      <CategoriesPage
        categories={this.props.categories}
        bannerClicked={this.bannerClicked}
      />
    );
  }
}

const mapStateToProps = ({ category, shippingLocation }) => ({
  categories: category.categories,
  shippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
