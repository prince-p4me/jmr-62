import React from "react";
import { FlatList } from "react-native";
import OrderSection from "./OrderSection";
import withSpinner from "../HOC/withSpinner";

const OrderSectionList = ({ items, shippingLocation }) => (
  <FlatList
    data={items}
    keyExtractor={section => section.sourcingLocationId}
    renderItem={({ item }) => (
      <OrderSection item={item} shippingLocation={shippingLocation} />
    )}
  />
);
export default withSpinner(OrderSectionList);
// export default OrderSectionList;
