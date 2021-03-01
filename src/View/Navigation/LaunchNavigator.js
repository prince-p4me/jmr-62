import LocationChange from "../Launch/Launch.container";
import OrderConfirmation from "../Order/OrderConfirmation.container";

import { createStackNavigator } from 'react-navigation-stack';;

const LaunchNavigator = createStackNavigator(
  {
    // Launch: { screen: Launch },
    LocationChange: { screen: LocationChange },
    OrderConfirmation: {
      screen: OrderConfirmation,
      navigationOptions: {
        title: "Order Confirmation"
      }
    }
    // LoginChooser: { screen: LoginChooser },
    // Login: { screen: Login },
    // signup: { screen: signup }
  },
  {
    initialRouteName: "LocationChange",
    mode: "modal",
    headerMode: "none"
  }
);

export default LaunchNavigator;
