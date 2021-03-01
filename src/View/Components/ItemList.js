import React from "react";
import { FlatList } from "react-native";
import ImageCard from "./ImageCard";
import withSpinner from "../HOC/withSpinner";

const ItemList = ({ items, itemClicked }) => (
  <FlatList
    data={items}
    numColumns={2}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <ImageCard item={item} itemClicked={itemClicked} />
    )}
  />
);

export default withSpinner(ItemList);
