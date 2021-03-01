import React from "react";
import { Icon, Text, View } from "native-base";
import styles from "./Styles/HeaderIcon";
import { TouchableOpacity, Image } from "react-native";
import referral from "../Assets/referral.png";
const ReferralIcon = ({ navigation, token }) => {
  return (
    <TouchableOpacity onPress={() => {
      if (token) {
        // alert("navigating to offers")
        navigation.navigate("Refferal");
      } else {
        // alert("navigating to login")
        navigation.navigate("Login");
      }
    }} style={{ flexDirection: "row", paddingHorizontal: 3, alignItems: "center" }}>
      <Image source={referral} style={{
        width: 20, height: 20,
        resizeMode: "contain", marginRight: 2
      }}></Image>
      <Text style={{ fontSize: 12, color: "black" }}>Referral</Text>
    </TouchableOpacity>
  );
};

export default ReferralIcon;
