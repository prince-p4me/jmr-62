import More from "../More/More.container";
import Profile from "../More/Profile.container";
import { Colors } from "../Themes";
import { createStackNavigator } from 'react-navigation-stack';;
import MyOrders from "../More/MyOrders.container";
import EditProfile from "../More/EditProfile.container";
import OrderDetail from "../More/OrderDetail.container";
import DfhOrderDetail from "../More/DfhOrderDetail.container";
import CartIcon from "../Cart/CartIcon.container";
import { Platform } from "react-native";
import React from "react";
import { View } from "native-base";
import HeaderIcon from "../Components/HeaderIcon";
import ReferralIcon from "../Components/ReferralIcon";
import OffersIcon from "../Components/OffersIcon";
const MoreNavigator = createStackNavigator(
  {
    More: {
      screen: More,
      navigationOptions: {
        title: "More"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile"
      }
    },
    MyOrders: {
      screen: MyOrders,
      navigationOptions: {
        title: "My Orders"
      }
    },
    OrderDetail: {
      screen: OrderDetail,
      navigationOptions: {
        title: "Detail"
      }
    },
    DfhOrderDetail: {
      screen: DfhOrderDetail,
      navigationOptions: {
        title: "Detail"
      }
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        title: "Edit Profile"
      }
    }
  },
  {
    initialRouteName: "More",
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

export default MoreNavigator;
