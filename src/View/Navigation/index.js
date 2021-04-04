import TabNavigator from "./TabNavigator";
import LaunchNavigator from "./LaunchNavigator";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// import { createStackNavigator } from 'react-navigation-stack';;
import LoginNavigator from "./LoginNavigator";
import OffersScreen from "../Offers/index";
import Refferal from "../Refferal";
import ContactUs from "../../View/ContactUs/index";
import RefferalMore from "../RefferalMore";
import ForceUpdateScreen from '../ForceUpdate/index'

const RootStack = createStackNavigator(
  {
    TabNavigator: { screen: TabNavigator },
    LaunchNavigator: { screen: LaunchNavigator },
    LoginNavigator: { screen: LoginNavigator },
    Offers: { screen: OffersScreen },
    ContactUs: { screen: ContactUs },
    Refferal: { screen: Refferal },
    RefferalMore: { screen: RefferalMore },
    ForceUpdateScreen: { screen: ForceUpdateScreen }
  },
  {
    initialRouteName: "TabNavigator",
    // initialRouteName: "RefferalMore",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);


export default AppContainer;
