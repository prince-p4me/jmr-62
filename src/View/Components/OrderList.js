import React from "react";
import { FlatList } from "react-native";
import OrderItem from "./OrderItem";
import withSpinner from "../HOC/withSpinner";

const OrderList = ({ items, orderClicked }) => (
  <FlatList
    data={items}
    keyExtractor={order => order.orderID}
    renderItem={({ item }) => (
      <OrderItem order={item} orderClicked={orderClicked} />
    )}
  />
);
export default withSpinner(OrderList);
// export default OrderSectionList;
