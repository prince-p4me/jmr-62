import { createStackNavigator } from 'react-navigation-stack';;
import Login from "../Login/Login.container";
import MoreNavigator from "./MoreNavigator";
import LoginNavigator from "./LoginNavigator";
import Register from "../Login/Register.container";
import { Colors } from "../Themes";

const LoginModalNavigator = createStackNavigator(
  {
    MoreNavigator: {
      screen: MoreNavigator,
      navigationOptions: {
        title: "Login"
      }
    },
    LoginNavigator: {
      screen: LoginNavigator,
      navigationOptions: {
        title: "OTP"
      }
    }
  },
  {
    initialRouteName: "MoreNavigator",
    mode: "modal",
    headerMode: "none"
  }
);

export default LoginModalNavigator;
