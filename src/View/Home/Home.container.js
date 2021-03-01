import React, { Component } from "react";
import { connect } from "react-redux";
import categoryActions from "../../Store/Redux/category";
import bannerActions from "../../Store/Redux/banner";
import banner1Actions from "../../Store/Redux/banner1";
import banner2Actions from "../../Store/Redux/banner2";
import HomePage from "./Home.page";
import Constants from "../../Services/Constant";
import categories from '../../Fixtures/category.json';
import { Platform } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          link_type: "cities",
          url: "https://rukminim1.flixcart.com/image/352/352/art-craft-kit/9/6/3/imagimake-mapology-states-of-india-original-imae6jcynzfd65ev.jpeg?q=70"
        }, {
          link_type: "brands",
          url: "https://s3.us-east-2.amazonaws.com/images.berkotfoods.com/Hexagons_Grocery/Berkots_Hexagon1_NameBrands.jpg"
        }, {
          link_type: "cities",
          url: "https://rukminim1.flixcart.com/image/352/352/art-craft-kit/9/6/3/imagimake-mapology-states-of-india-original-imae6jcynzfd65ev.jpeg?q=70"
        }, {
          link_type: "brands",
          url: "https://s3.us-east-2.amazonaws.com/images.berkotfoods.com/Hexagons_Grocery/Berkots_Hexagon1_NameBrands.jpg"
        }
      ],
      categories: categories
    };
  }

  static navigationOptions = {
    header: null
  }

  locationClicked = () => {
    this.props.navigation.navigate("LaunchNavigator");
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { shippingLocation } = nextProps;
    // const { bannersRequest, banners1Request, banners2Request } = this.props;
    if (this.props.shippingLocation && shippingLocation.id != this.props.shippingLocation.id) {
      this.props.bannersRequest(shippingLocation.id);
      this.props.banners1Request(shippingLocation.id);
      this.props.banners2Request(shippingLocation.id);
    }
    return true;
  }

  componentDidMount = async () => {
    let response = await fetch(Constants.API_URL + 'getCurrentBuild', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    let jsonResposne = await response.json()
    console.warn(jsonResposne)
    // alert(JSON.stringify(jsonResposne))
    if (Platform.OS == 'android') {
      if (jsonResposne.android_version != '0.3.2') {
        this.props.navigation.navigate('ForceUpdateScreen')
        return;
      }
    }
    if (Platform.OS == 'ios') {
      if (jsonResposne.android_version != '1.1') {
        this.props.navigation.navigate('ForceUpdateScreen')
        return;
      }
    }
    let { navigation,
      shippingLocation,
      bannersRequest,
      banners1Request,
      banners2Request
    } = this.props;
    if (!shippingLocation.id) {
      navigation.navigate("LaunchNavigator");
    }
    console.log("home page")
    // let parameters = {
    //   shippingLocationId: shippingLocation.id
    // };
    bannersRequest(shippingLocation.id);
    banners1Request(shippingLocation.id);
    banners2Request(shippingLocation.id);
  }

  bannerClicked = item => {
    console.log(JSON.stringify(item))
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
      case "D":
        this.props.navigation.navigate("Dfh");
        break;
      case "CIS":
        this.props.navigation.navigate("ProductList", {
          type: item.link_type,
          itemId: item.param,
          name: item.heading
        });
        break;
      case "BRS":
        this.props.navigation.navigate("ProductList", {
          type: item.link_type,
          itemId: item.param,
          name: item.heading
        });
        break;
      case "CI":
        this.props.navigation.navigate("ShopBy", {
          type: Constants.SOURCING_LOCATION
        });
        break;
      case "BR":
        this.props.navigation.navigate("ShopBy", {
          type: Constants.SHOP
        });
        break;
      case "CU":
        this.props.navigation.navigate("ProductList", {
          itemId: item.param,
          type: Constants.CUISINE,
          name: item.heading
        });
        break;
      case "R":
        this.props.navigation.navigate("Refferal");
        break;
      case "W":
        this.props.navigation.navigate("WishDishScreen");
        break;
      default:
        break;
    }
    // this.props.navigation.navigate("ProductList", {
    //   itemId: id,
    //   type: this.props.navigation.state.params.type
    // });
  };

  optionClicked = item => {
    console.log(JSON.stringify(item))
    switch (item.link_type) {
      case "CI":
        this.props.navigation.navigate("ShopBy", {
          type: Constants.SOURCING_LOCATION
        });
        break;
      case "BR":
        this.props.navigation.navigate("ShopBy", {
          type: Constants.SHOP
        });
        break;
      default:
        break;
    }
  }

  categoryClicked = item => {
    console.log(JSON.stringify(item))
    switch (item.link_type) {
      case "D":
        this.props.navigation.navigate("Dfh");
        break;
      case "C":
        this.props.navigation.navigate("SubCategories", {
          type: Constants.SUB_CATEGORY,
          categoryId: item.id,
          name: item.heading
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <HomePage
        navigation={this.props.navigation}
        banners={this.props.banners}
        bannerClicked={this.bannerClicked}
        options={this.props.options}
        categories={this.props.categories}
      // optionClicked={this.optionClicked}
      // categoryClicked={this.categoryClicked}
      // locationClicked={this.locationClicked}
      />
    );
  }
}

const mapStateToProps = ({ banner, banner1, banner2, shippingLocation }) => ({
  // categories: category.categories,
  banners: banner.banners,
  options: banner1.banners,
  categories: banner2.banners,
  shippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = {
  ...categoryActions,
  ...bannerActions,
  ...banner1Actions,
  ...banner2Actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
