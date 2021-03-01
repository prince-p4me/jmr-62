import React from "react";
import styles from "./Cart.style";
import { Icon, Text } from "native-base";
import { Colors } from "../Themes";

const CartIcon = ({ count, navigation }) => {
  return (
    <Icon
      style={{ marginRight: 10, color: Colors.ember }}
      type="FontAwesome"
      name="shopping-bag"
      onPress={() => navigation.navigate("Cart")}
    >
      <Text>{count}</Text>
    </Icon>
  );
};

export default CartIcon;
