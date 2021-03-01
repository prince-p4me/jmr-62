import Dfh from "../DFH/Dfh.component";
import DfhFromNavigator from "./DfhFromNavigator";
import DfhToNavigator from "./DfhToNavigator";
import DfhPreferenceNavigator from "./DfhPreferenceNavigator";
import DfhItemNavigator from "./DfhItemNavigator";
import DfhSummary from "../DFH/DfhSummary.container";
import { Colors } from "../Themes";
import { createStackNavigator } from 'react-navigation-stack';;
import CartIcon from "../Cart/CartIcon.container";
import { Platform } from "react-native";
import React from "react";
import { View } from "native-base";
import HeaderIcon from "../Components/HeaderIcon";
import PaymentMethods from "../Order/PaymentMethods.container";
import PaymentGateway from "../Order/PaymentGateway";

const DfhNavigator = createStackNavigator(
  {
    Dfh: {
      screen: Dfh,
      navigationOptions: {
        title: "DFH"
      }
    },
    DfhFromNavigator: {
      screen: DfhFromNavigator,
      navigationOptions: {
        title: "From Address"
      }
    },
    DfhToNavigator: {
      screen: DfhToNavigator,
      navigationOptions: {
        title: "To Address"
      }
    },
    DfhItemNavigator: {
      screen: DfhItemNavigator,
      navigationOptions: {
        title: "Items"
      }
    },
    DfhPreferenceNavigator: {
      screen: DfhPreferenceNavigator,
      navigationOptions: {
        title: "Preferences"
      }
    },
    DfhSummary: {
      screen: DfhSummary,
      navigationOptions: {
        title: "Summary"
      }
    },
    PaymentMethods: {
      screen: PaymentMethods,
      navigationOptions: {
        title: "Payment"
      }
    },
    PaymentGateway: {
      screen: PaymentGateway,
      navigationOptions: {
        title: "Pay"
      }
    }
  },
  {
    initialRouteName: "Dfh",
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

export default DfhNavigator;
