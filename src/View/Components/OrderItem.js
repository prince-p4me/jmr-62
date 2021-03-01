import React from "react";
import styles from "./Styles/OrderProduct";
import { Body, Text, ListItem, Right, Icon } from "native-base";
const OrderItem = ({ order, orderClicked }) => (
  <ListItem onPress={() => orderClicked(order)}>
    <Body>
      <Text>Order: {order.orderID}</Text>
      <Text note>{order.orderDate}</Text>
    </Body>
    <Right>
      <Text note>{order.paymentStatus}</Text>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

export default OrderItem;
