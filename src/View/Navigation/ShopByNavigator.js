import ShopBy from "../ShopBy/ShopBy.component";
import ShopByOptions from "../ShopBy/ShopBy.container";
import ProductList from "../Product/ProductList.container";
import ProductDetail from "./ProductModalNavigator";
import { Colors } from "../Themes";
import CartIcon from "../Cart/CartIcon.container";
import { Platform } from "react-native";
import React from "react";
import { createStackNavigator } from 'react-navigation-stack';;
import { View } from "native-base";
import HeaderIcon from "../Components/HeaderIcon";

const ShopByNavigator = createStackNavigator(
  {
    ShopBy: {
      screen: ShopBy,
      navigationOptions: {
        title: "Shop By"
      }
    },
    ShopByOptions: {
      screen: ShopByOptions
    },
    ProductList: {
      screen: ProductList
    },
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: {
        title: "Detail"
      }
    }
  },
  {
    initialRouteName: "ShopBy",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.charcoal,
      headerRight: (
        <View style={{ flexDirection: "row" }}>
          <HeaderIcon
            icon="search"
            onPress={() => navigation.navigate("SearchProducts")}
          />
          <CartIcon navigation={navigation} />
        </View>
      ),
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: "Arial" },
          android: { fontFamily: "Roboto" }
        })
      }
    })
  }
);

export default ShopByNavigator;
