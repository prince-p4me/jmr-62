import React from "react";
import styles from "./Styles/CartItem";
import { TouchableOpacity } from "react-native";
import { View, Text, ListItem, Icon, Button } from "native-base";
import ButtonWithLoader from "./ButtonWithLoader";
import Label from "./Label";
const CartItem = ({ item, incQty, decQty, setPreference, colorClicked }) => (
  <ListItem style={styles.listItem}>
    <View style={styles.shopLine1}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.price}>Rs.{item.price}</Text>
    </View>
    <View style={styles.shopLine3}>
      <Text style={styles.shopName}>{item.shopName}</Text>
      <View style={styles.quantitySection}>
        <TouchableOpacity
          onPress={() => decQty(item)}
          disabled={item.quantity == 0}
        >
          <Icon style={styles.iconMinus} type="FontAwesome" name="minus" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => incQty(item)}>
          <Icon style={styles.iconPlus} type="FontAwesome" name="plus" />
        </TouchableOpacity>
      </View>
    </View>
  </ListItem>
);

export default CartItem;
