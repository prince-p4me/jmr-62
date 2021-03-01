import React from "react";
import { FlatList } from "react-native";
import { Text, Left, Radio, Right, ListItem } from "native-base";
import withSpinner from "../HOC/withSpinner";
const RadioList = ({ items, itemClicked }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <ListItem onPress={() => itemClicked(item)}>
          <Left>
            <Text>{item}</Text>
          </Left>
          <Right>
            <Radio />
          </Right>
        </ListItem>
      )}
    />
  );
};

export default withSpinner(RadioList);
