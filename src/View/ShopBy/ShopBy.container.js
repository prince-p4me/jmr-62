import React, { Component } from "react";
import { connect } from "react-redux";
import communityActions from "../../Store/Redux/community";
import cuisineActions from "../../Store/Redux/cuisine";
import sourcingLocationActions from "../../Store/Redux/sourcingLocation";
import shopActions from "../../Store/Redux/shop";
import subCategoryActions from "../../Store/Redux/subCategory";
import Constants from "../../Services/Constant";
import List from "../Components/List";
import { Container, Content } from "native-base";
import CustomHeader from "../Components/CustomHeader";

class ShopBy extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFilterId: null };
  }
  parameters = { shippingLocationId: this.props.shippingLocation.id };

  // static navigationOptions = ({ navigation }) => ({
  //   title: navigation.state.params.title
  // });

  static navigationOptions = {
    header: null
  }

  getFilters = () => {
    if (this.props.navigation.state.params.type == Constants.SHOP) {
      let filters = this.props.sourcingLocations;
      return filters
        .map(item => ({
          ...item,
          selected: item.id == this.state.selectedFilterId ? true : false
        }))
        .sort((a, b) => (a.selected ? -1 : 1));
    }
  };

  itemClicked = item => {
    this.props.navigation.navigate("ProductList", {
      itemId: item.id,
      type: this.props.navigation.state.params.type,
      name: item.name
    });
  };

  filterClicked = id => {
    if (id == this.state.selectedFilterId) {
      this.setState({ selectedFilterId: null });
      this.parameters = { ...this.parameters, sourcingLocationId: null };
    } else {
      this.parameters = { ...this.parameters, sourcingLocationId: id };
      this.setState({ selectedFilterId: id });
    }
    this.props.shopsRequest(this.parameters);
  };

  componentDidMount() {
    var title;
    switch (this.props.navigation.state.params.type) {
      case Constants.SOURCING_LOCATION:
        title = "Cities";
        this.props.sourcingLocationsRequest(this.parameters);
        break;
      case Constants.COMMUNITY:
        title = "Communities";
        this.props.communitiesRequest(this.parameters);
        break;
      case Constants.CUISINE:
        title = "Cuisines";
        this.props.cuisinesRequest(this.parameters);
        break;
      case Constants.SHOP:
        title = "Shops";
        this.props.shopsRequest(this.parameters);
        this.props.sourcingLocationsRequest(this.parameters);
        break;
      case Constants.SUB_CATEGORY:
        title = this.props.navigation.state.params.name;
        this.parameters = {
          ...this.parameters,
          categoryId: this.props.navigation.state.params.categoryId
        };
        this.props.subCategoriesRequest(this.parameters);
        break;

      default:
        break;
    }
    this.props.navigation.setParams({
      title: title
    });
  }

  getItems = () => {
    var items;
    switch (this.props.navigation.state.params.type) {
      case Constants.SOURCING_LOCATION:
        items = this.props.sourcingLocations;
        break;
      case Constants.COMMUNITY:
        items = this.props.communities;
        break;
      case Constants.CUISINE:
        items = this.props.cuisines;
        break;
      case Constants.SHOP:
        items = this.props.shops;
        break;
      case Constants.SUB_CATEGORY:
        items = this.props.subCategories;
        break;

      default:
        break;
    }
    return items;
  };

  render() {
    let { navigation } = this.props;
    return (
      <Container>
        <CustomHeader title={navigation.state.params.title}
          navigation={navigation} />
        {/* <Content> */}
        <List
          items={this.getItems()}
          filters={this.getFilters()}
          itemClicked={this.itemClicked}
          filterClicked={this.filterClicked}
        />
        {/* </Content> */}
      </Container>
    );
  }
}

const mapStateToProps = ({
  cuisine,
  sourcingLocation,
  community,
  shop,
  subCategory,
  shippingLocation
}) => ({
  cuisines: cuisine.cuisines,
  communities: community.communities,
  sourcingLocations: sourcingLocation.sourcingLocations,
  shops: shop.shops,
  subCategories: subCategory.subCategories,
  shippingLocation: shippingLocation.selectedShippingLocation
});

const mapDispatchToProps = {
  ...communityActions,
  ...sourcingLocationActions,
  ...cuisineActions,
  ...shopActions,
  ...subCategoryActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopBy);
