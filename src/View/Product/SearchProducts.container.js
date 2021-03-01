import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../Store/Redux/product";
import SearchProductsPage from "./SearchProducts.page";

class SearchProducts extends Component {
  static navigationOptions = {
    header: null
  }

  searchProducts = searchStr => {
    if (searchStr.length >= 3) {
      let parameters = {
        search: searchStr,
        shippingLocationId: this.props.shippingLocationId,
        foodPref: this.props.ftype
      };
      this.props.searchProductsRequest(parameters);
    }
  };

  closeSearch = () => {
    this.props.resetProductSearch();
    this.props.navigation.goBack();
  };

  itemClicked = item => {
    this.props.resetProductSearch();
    this.props.navigation.goBack();
    this.props.navigation.navigate("ProductDetail", {
      productId: item.id
    });
  };

  render() {
    return (
      <SearchProductsPage
        closeSearch={this.closeSearch}
        searchProducts={this.searchProducts}
        products={this.props.products}
        itemClicked={this.itemClicked}
        fetching={this.props.fetching}
      />
    );
  }
}

const mapStateToProps = ({ product, shippingLocation, ftype }) => ({
  products: product.searchProducts,
  fetching: product.fetching,
  shippingLocationId: shippingLocation.selectedShippingLocation.id,
  ftype: ftype.ftype
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchProducts);
