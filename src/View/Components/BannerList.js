import React from "react";
import { FlatList } from "react-native";
import Banner from "./Banner";
import withSpinner from "../HOC/withSpinner";

const BannerList = ({ items, bannerClicked, banner }) => (
  <FlatList
    data={items}
    keyExtractor={image => image.id}
    renderItem={({ item }) => (
      <Banner item={item} bannerClicked={bannerClicked} banner={banner} />
    )}
  />
);
export default withSpinner(BannerList);
