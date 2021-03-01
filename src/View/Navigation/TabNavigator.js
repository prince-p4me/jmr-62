// import { NavigationActions, createBottomTabNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesNavigator from "./CategoriesNavigator";
import ShopByNavigator from "./ShopByNavigator";
import DfhModalNavigator from "./DfhModalNavigator";
import ModalNavigator from "./ModalNavigator";
import LoginModalNavigator from "./LoginModalNavigator";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { View, Text } from "react-native";
import { Badge } from "native-base";
import { Colors, Fonts } from "../Themes";
import SearchProducts from "../Product/SearchProducts.container";
import CartModalNavigator from "./CartModalNavigator";
import SearchNavigator from "./SearchNavigator";
import MoreNavigator from "./MoreNavigator";
import HomeNavigator from "./HomeNavigator";
import BadgeIcon from "../Components/BadgeIcon";

export default createBottomTabNavigator(
  {
    Home: HomeNavigator,
    // Categories: CategoriesNavigator,
    // ShopBy: ShopByNavigator,
    // DFH: DfhModalNavigator,
    Search: SearchNavigator,
    Cart: CartModalNavigator,
    Account: MoreNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Search") {
          iconName = "search";
        } else if (routeName === "Cart") {
          iconName = "shopping-bag";
        } else if (routeName === "DFH") {
          iconName = "gift";
        } else if (routeName === "Account") {
          iconName = "user-o";
        }

        return (
          <View style={{ flex: 1 }}>
            <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
            {
              (routeName == "Cart") && <BadgeIcon />
            }
          </View>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.ember,
      inactiveTintColor: "#a8a8a8"
    }
  }
);