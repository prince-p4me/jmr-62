// import { createStackNavigator } from 'react-navigation-stack';;
import { createStackNavigator } from 'react-navigation-stack';
import Login from "../Login/Login.container";
import Otp from "../Login/Otp.container";
import Register from "../Login/Register.container";
import { Colors } from "../Themes";
import { Platform, View, TouchableOpacity } from "react-native";
import ReferralIcon from "../Components/ReferralIcon";
import OffersIcon from "../Components/OffersIcon";
import React from "react";
import { Icon } from "native-base";

const LoginNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: "Login",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={{ marginHorizontal: 10, color: Colors.ember }}
              type="MaterialIcons" name="keyboard-backspace" />
          </TouchableOpacity>
        ),
      })
    },
    Otp: {
      screen: Otp,
      navigationOptions: {
        title: "OTP"
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: "Register"
      }
    }
  },
  {
    initialRouteName: "Login",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.ember,
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: "Arial", fontSize: 14 },
          android: { fontFamily: "Roboto", fontSize: 14 }
        })
      }
    })
  }
);

export default LoginNavigator;
