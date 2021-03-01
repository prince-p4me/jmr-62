import React from "react";
import styles from "./Styles/OrderDetailFooter";
import Label from "./Label";

import { View, Text, ListItem, List } from "native-base";
const OrderDetailBlock = ({ order }) => (
  <List>
    <Label text={"Order: " + order.sale_code} large />
    <ListItem style={styles.listItem}>
      <Label text={"Payment Status: " + order.payment_status} />
      <Label text={"Delivery Status: " + order.delivery_status} />
    </ListItem>

    <ListItem style={styles.listItem}>
      <View style={styles.shopLine3}>
        <Text style={styles.left}>Total Price</Text>
        <Text style={styles.right}>{order.total_payment}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.left}>GST</Text>
        <Text style={styles.right}>{order.total_tax}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.leftBold}>Order Total</Text>
        <Text style={styles.rightBold}>Rs. {order.grand_total}</Text>
      </View>
    </ListItem>
    <ListItem />
  </List>
);

export default OrderDetailBlock;
