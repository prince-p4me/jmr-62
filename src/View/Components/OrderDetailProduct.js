import React from "react";
import styles from "./Styles/OrderProduct";
import { View, Text, ListItem } from "native-base";
const OrderProduct = ({ item }) => (
  <ListItem style={styles.listItem}>
    <View style={styles.shopLine1}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.shopName}>{item.shopName}</Text>
    </View>
    <View style={styles.shopLine3}>
      <Text style={styles.left}>Price</Text>
      <Text style={styles.right}>
        {item.price} x {item.qty} = {item.price * item.qty}
      </Text>
    </View>
    <View style={styles.shopLine3}>
      <Text style={styles.left}>Handling Charges</Text>
      <Text style={styles.right}>
        {item.handling_charges} x {item.qty} ={item.handling_charges * item.qty}
      </Text>
    </View>
    {item.total_discount > 0 ? (
      <View style={styles.shopLine3}>
        <Text style={styles.left}>Discount</Text>
        <Text style={styles.right}>-{item.total_discount}</Text>
      </View>
    ) : null}

    <View style={styles.shopLine3}>
      <Text style={styles.left}>Tax</Text>
      <Text style={styles.right}>{item.tax * item.qty}</Text>
    </View>
    <View style={styles.shopLine3}>
      <Text style={styles.leftBold}>Sub Total</Text>
      <Text style={styles.rightBold}>Rs. {item.subtotal}</Text>
    </View>
  </ListItem>
);

export default OrderProduct;
