import React, { Component } from "react";
import { connect } from "react-redux";
import categoryActions from "../../Store/Redux/category";
import bannerActions from "../../Store/Redux/banner";
import HomePage from "./Home.page";
import Constants from "../../Services/Constant";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   static navigationOptions = {
  //     title: "SELECT YOUR CUP",
  //     headerTitleStyle: { textAlign: "center", alignSelf: "center" }
  //   };

  locationClicked = () => {
    this.props.navigation.navigate("LaunchNavigator");
  };
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { shippingLocation } = nextProps;
    if (shippingLocation.id != this.props.shippingLocation.id) {
      this.props.bannersRequest(shippingLocation.id);
    }
    return true;
  }
  componentDidMount() {
    if (!this.props.shippingLocation.id) {
      this.props.navigation.navigate("LaunchNavigator");
    }
    let parameters = {
      shippingLocationId: this.props.shippingLocation.id
    };
    this.props.bannersRequest(this.props.shippingLocation.id);
  }
  bannerClicked = item => {
    switch (item.link_type) {
      case "P":
        this.props.navigation.navigate("ProductDetail", {
          productId: item.param
        });
        break;
      case "C":
        this.props.navigation.navigate("SubCategories", {
          type: Constants.SUB_CATEGORY,
          categoryId: item.param,
          name: item.heading
        });
        break;
      case "SC":
        this.props.navigation.navigate("ProductList", {
          type: Constants.SUB_CATEGORY,
          itemId: item.param,
          name: item.heading
        });
        break;
      case "CM":
        this.props.navigation.navigate("ProductList", {
          type: Constants.COMMUNITY,
          itemId: item.param,
          name: item.heading
        });
        break;
      default:
        break;
    }
    // this.props.navigation.navigate("ProductList", {
    //   itemId: id,
    //   type: this.props.navigation.state.params.type
    // });
  };

  render() {
    return (
      <HomePage
        location={this.props.shippingLocation}
        categories={this.props.categories}
        banners={this.props.banners}
        bannerClicked={this.bannerClicked}
        navigation={this.props.navigation}
        locationClicked={this.locationClicked}
      />
    );
  }
}

const mapStateToProps = ({ category, banner, shippingLocation }) => ({
  categories: category.categories,
  banners: banner.banners,
  shippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = { ...categoryActions, ...bannerActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
