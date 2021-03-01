import React from "react";
import withSpinner from "../HOC/withSpinner";
import { FlatList, View } from "react-native";
import ButtonWithLoader from "./ButtonWithLoader";

const ButtonList = ({ items, itemClicked }) => (
  <FlatList
    data={items}
    keyExtractor={item => item.type}
    renderItem={({ item }) => (
      <View>
        <ButtonWithLoader
          fetching={item.selected}
          title={item.name}
          item={item}
          onPress={itemClicked}
        />
        <View style={{ height: 25 }} />
      </View>
    )}
  />
);
export default withSpinner(ButtonList);
