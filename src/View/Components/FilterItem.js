import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Styles/FilterItem";
const FilterItem = ({ item, filterClicked,disabled }) => (
  <TouchableOpacity disabled={disabled}
    style={item.selected ? styles.selectedFilterCard : styles.filterCard}
    onPress={() => filterClicked(item.id)}
  >
    <Text style={item.selected ? styles.selectedText : null}>{item.name}</Text>
  </TouchableOpacity>
);

export default FilterItem;
