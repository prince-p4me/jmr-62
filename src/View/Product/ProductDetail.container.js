import React, { Component } from "react";
import { connect } from "react-redux";
import productActions from "../../Store/Redux/product";
import cartActions from "../../Store/Redux/cart";
import ProductDetailComponent from "./ProductDetail.component";
import { ActivityIndicator } from "react-native";
import { Toast } from "native-base";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { selections: [] };
  }
  static navigationOptions = {
    header: null
  }

  // static navigationOptions = {
  //   headerRight: (
  //     <Icon
  //       style={{ marginRight: 10, color: Colors.ember }}
  //       type="FontAwesome"
  //       name="shopping-cart"
  //     />
  //   )
  // };
  componentDidMount() {
    const productId = this.props.navigation.state.params
      ? this.props.navigation.state.params.productId
      : 1;
    let parameters = {
      productId,
      shippingLocationId: this.props.shippingLocation.id
    };
    this.props.productDetailRequest(parameters);
  }
  getProduct = () => {
    let product = this.props.product;
    var selections = this.state.selections;
    product.shops = product.shops.map(shop => {
      let shopObj = selections.find(
        selection => selection.productId === shop.productId
      );
      return shopObj
        ? { ...shop, quantity: shopObj.quantity }
        : { ...shop, quantity: 0 };
    });
    return product;
  };
  incQty = shop => {
    let selections = this.state.selections;
    selections.find(selection => selection.productId === shop.productId)
      ? this.setState({
        ...this.state,
        selections: selections.map(selection =>
          selection.productId == shop.productId
            ? { ...selection, quantity: selection.quantity + 1 }
            : selection
        )
      })
      : this.setState({
        ...this.state,
        selections: [...selections, { ...shop, quantity: 1 }]
      });
  };

  decQty = shop => {
    let selections = this.state.selections;
    let index = selections.findIndex(
      selection => selection.productId === shop.productId
    );
    if (selections[index].quantity > 1) {
      this.setState({
        ...this.state,
        selections: selections.map(selection =>
          selection.productId == shop.productId
            ? { ...selection, quantity: selection.quantity - 1 }
            : selection
        )
      });
    } else {
      this.setState({
        ...this.state,
        selections: [
          ...selections.slice(0, index),
          ...selections.slice(index + 1)
        ]
      });
    }
  };

  addToCart = () => {
    if (this.state.selections.length > 0) {
      this.props.addToCart(
        this.state.selections.map(shop => ({
          ...shop,
          selectedColor: this.props.product.selectedColor,
          options: this.props.product.options
        }))
      );
      Toast.show({
        text: "Added to Cart!",
        buttonText: "Okay",
        duration: 2000
      });
    } else {
      Toast.show({
        text: "Nothing to Add!",
        buttonText: "Okay",
        duration: 2000
      });
    }
  };

  colorClicked = color => {
    this.props.setProductColor(color);
  };

  optionClicked = option => {
    switch (option.type) {
      case "text":
        this.props.setPreferenceText(option.selectedValue);
        this.props.navigation.navigate("SetPreferenceText", {
          option
        });
        break;
      case "single_select":
        this.props.navigation.navigate("SelectOption", {
          option
        });
        break;
      case "multi_select":
        this.props.navigation.navigate("MultiSelect", {
          option
        });
        break;
      case "radio":
        this.props.navigation.navigate("SelectOption", {
          option
        });
        break;
      default:
        break;
    }
  };

  render() {
    return this.props.product ? (
      <ProductDetailComponent
        navigation={this.props.navigation}
        product={this.getProduct()}
        navigation={this.props.navigation}
        incQty={this.incQty}
        decQty={this.decQty}
        addToCart={this.addToCart}
        optionClicked={this.optionClicked}
        colorClicked={this.colorClicked}
      />
    ) : (
        <ActivityIndicator />
      );
  }
}

const mapStateToProps = ({ product, shippingLocation }) => ({
  product: product.product,
  shippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = {
  ...productActions,
  ...cartActions
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
