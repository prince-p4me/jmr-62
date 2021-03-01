import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Styles/ColorItem";
const ColorItem = ({ item, colorClicked, product }) => (
  <TouchableOpacity
    style={{
      backgroundColor: item,
      ...(item == product.selectedColor
        ? styles.selectedFilterCard
        : styles.filterCard)
    }}
    onPress={() => colorClicked(item, product)}
  >
    <Text style={{ backgroundColor: item }}>{"    "}</Text>
  </TouchableOpacity>
);

export default ColorItem;
