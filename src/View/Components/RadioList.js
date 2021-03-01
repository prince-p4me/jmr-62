import React from "react";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { Text, Body, Radio, Right, ListItem } from "native-base";
import withSpinner from "../HOC/withSpinner";
const RadioList = ({ items, itemClicked }) => {
  console.log("items", items)
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback onPress={() => itemClicked(item)}>
          <ListItem>
            <Body>
              <Text>{item.name}</Text>
              {item.price && <Text note>{item.price ? "Rs. " + item.price : null}</Text>}
            </Body>
            <Right>
              <Radio selected={item.selected} />
            </Right>
          </ListItem>
        </TouchableWithoutFeedback>
      )}
    />
  );
};

export default withSpinner(RadioList);
