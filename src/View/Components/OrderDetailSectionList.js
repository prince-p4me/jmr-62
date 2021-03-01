import React from "react";
import { FlatList } from "react-native";
import OrderDetailSection from "./OrderDetailSection";
import withSpinner from "../HOC/withSpinner";

const OrderDetailSectionList = ({ items }) => (
  <FlatList
    data={items}
    keyExtractor={invoice => invoice.source_location}
    renderItem={({ item }) => <OrderDetailSection item={item} />}
  />
);
export default withSpinner(OrderDetailSectionList);
// export default OrderSectionList;
