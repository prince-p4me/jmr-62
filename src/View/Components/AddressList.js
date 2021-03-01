import React from "react";
import { FlatList } from "react-native";
import AddressCard from "./AddressCard";
import withSpinner from "../HOC/withSpinner";

const AddressList = ({ items, selectAddress }) => (
  <FlatList
    data={items}
    keyExtractor={item => item.address_id}
    renderItem={({ item }) => (
      <AddressCard address={item} selectAddress={selectAddress} />
    )}
  />
);
// export default withSpinner(AddressList);
export default AddressList;
