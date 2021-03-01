import DeliveryLocation from "../DFH/DeliveryLocation.container";
import DfhTo from "../DFH/DfhTo.container";
import { createStackNavigator } from 'react-navigation-stack';;

const DfhToNavigator = createStackNavigator(
  {
    DfhTo: {
      screen: DfhTo,
      navigationOptions: {
        title: "From Address"
      }
    },
    DeliveryLocation: {
      screen: DeliveryLocation,
      navigationOptions: {
        title: "Delivery Location"
      }
    }
  },
  {
    initialRouteName: "DfhTo",
    mode: "modal",
    headerMode: "none"
  }
);

export default DfhToNavigator;
