import React from "react";
import withSpinner from "../HOC/withSpinner";
import { FlatList } from "react-native";
import ThumbnailRadioItem from "./ThumbnailRadioItem";

const ThumbnailRadioList = ({ items, itemClicked }) => (
  <FlatList
    data={items}
    keyExtractor={item => item.type}
    renderItem={({ item }) => (
      <ThumbnailRadioItem item={item} itemClicked={itemClicked} />
    )}
  />
);
export default withSpinner(ThumbnailRadioList);
