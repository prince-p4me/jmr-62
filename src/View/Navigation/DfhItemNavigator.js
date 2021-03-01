import DfhAddItem from "../DFH/AddItem.container";
import DfhItems from "../DFH/DfhItems.container";
import { createStackNavigator } from 'react-navigation-stack';;

const DfhItemNavigator = createStackNavigator(
  {
    DfhItems: {
      screen: DfhItems,
      navigationOptions: {
        title: "Items"
      }
    },
    DfhAddItem: {
      screen: DfhAddItem,
      navigationOptions: {
        title: "Items"
      }
    }
  },
  {
    initialRouteName: "DfhItems",
    mode: "modal",
    headerMode: "none"
  }
);

export default DfhItemNavigator;
