import Home from "../Home/Home.container";
import ShopByOptions from "../ShopBy/ShopBy.container";
import ProductList from "../Product/ProductList.container";
// import ProductDetail from "./ProductModalNavigator";
import Cart from "./CartModalNavigator";
import OrderSummary from "../Order/OrderSummary.container";
import PaymentMethods from "../Order/PaymentMethods.container";
import Address from "../Address/Address.container";
import SearchProducts from "../Product/SearchProducts.container";
import PaymentGateway from "../Order/PaymentGateway";
import CartIcon from "../Cart/CartIcon.container";
import { createStackNavigator } from 'react-navigation-stack';;
import { Colors } from "../Themes";
import React from "react";
import { View } from "native-base";
import HeaderIcon from "../Components/HeaderIcon";
import ProductDetail from "../Product/ProductDetail.container";
// import SearchProducts from "../Product/SearchProducts.container";

import { Platform } from "react-native";
import ReferralIcon from "../Components/ReferralIcon";
import OffersIcon from "../Components/OffersIcon";

const SearchNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchProducts,
      headerMode: 'none',
      navigationOptions: {
        title: "Search",
        headerVisible: false,
      }
    },
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: {
        title: "Product",
      }
      // navigationOptions: ({ navigation }) => ({
      //   headerTintColor: Colors.ember,
      //   headerRight: (
      //     <View style={{ flexDirection: "row" }}>
      //       <ReferralIcon/>
      //       <OffersIcon/>
      //       {/* <CartIcon navigation={navigation} /> */}
      //     </View>
      //   ),
      //   headerTitleStyle: {
      //     ...Platform.select({
      //       ios: { fontFamily: "Arial",fontSize:14 },
      //       android: { fontFamily: "Roboto",fontSize:14 }
      //     })
      //   }
      // })
    }
  },
  {
    initialRouteName: "Search",
    // headerMode: "none",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.ember,
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <ReferralIcon />
          <OffersIcon />
        </View>
      ),
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: "Arial", fontSize: 14 },
          android: { fontFamily: "Roboto", fontSize: 14 }
        })
      }
    })
  }
);

export default SearchNavigator;
