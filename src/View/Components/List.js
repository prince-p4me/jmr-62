import React from "react";
import { Container, Content } from "native-base";
import { View } from "react-native";
import FilterList from "./FilterList";
import ItemList from "./ItemList";

const List = ({ filters, items, itemClicked, filterClicked }) => (
  <View style={{ flex: 1, }}>
    <FilterList filters={filters} filterClicked={filterClicked} />
    <ItemList items={items} itemClicked={itemClicked} />
  </View>
);

export default List;
