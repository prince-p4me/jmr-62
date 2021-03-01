import PickupLocation from "../DFH/PickupLocation.container";
import DfhFrom from "../DFH/DfhFrom.container";
import { createStackNavigator } from 'react-navigation-stack';;

const DfhFromNavigator = createStackNavigator(
  {
    DfhFrom: {
      screen: DfhFrom,
      // navigationOptions: {
      //   title: "From Address"
      // }
    },
    PickupLocation: {
      screen: PickupLocation,
      navigationOptions: {
        title: "Pick Up Location"
      }
    }
  },
  {
    initialRouteName: "DfhFrom",
    mode: "modal",
    headerMode: "none"
  }
);

export default DfhFromNavigator;
