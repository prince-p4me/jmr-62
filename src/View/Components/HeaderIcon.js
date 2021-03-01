import React from "react";
import { Icon, Text, Image, View } from "native-base";
import styles from "./Styles/HeaderIcon";
import { TouchableOpacity } from "react-native";

const HeaderIcon = ({ count, onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row" }}>
      <Icon style={styles.icon} type="FontAwesome" name={icon} />
      {count ? (
        <Badge style={styles.badge}>
          <Text style={styles.text}>{count}</Text>
        </Badge>
      ) : null}
    </TouchableOpacity>
  );
};

export default HeaderIcon;
