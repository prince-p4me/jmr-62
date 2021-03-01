import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";
import AddAddressForm from "../Address/AddAddress.container";
import SearchProducts from "../Product/SearchProducts.container";
import LoginNavigator from "./LoginNavigator";

import { createStackNavigator } from 'react-navigation-stack';;
import { Colors } from "../Themes";

const AddressNavigator = createStackNavigator(
  {
    HomeNavigator: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home"
      }
    },
    // SearchProducts: {
    //   screen: SearchNavigator,
    //   navigationOptions: {
    //     title: "Search Products"
    //   }
    // },
    // AddAddress: {
    //   screen: AddAddressForm,
    //   navigationOptions: {
    //     title: "Add Address"
    //   }
    // },
    // LoginNavigator: {
    //   screen: LoginNavigator,
    //   navigationOptions: {
    //     title: "OTP"
    //   }
    // }
  },
  {
    initialRouteName: "HomeNavigator",
    mode: "modal",
    headerMode: "none"
  }
);

export default AddressNavigator;
