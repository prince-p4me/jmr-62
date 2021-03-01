import React from "react";
import { Container, Content, ListItem, Body, Text, View } from "native-base";
import { FlatList } from "react-native";
import Label from "./Label";
const SetPreference = ({ options, optionClicked }) => {
  return (
    <View>
      <Label text={"Set Preferences"} />
      <FlatList
        data={options}
        keyExtractor={item => item.no}
        renderItem={({ item }) => (
          <ListItem onPress={() => optionClicked(item)}>
            <Body>
              <Text>{item.title}</Text>
              <Text note>
                {item.type == "multi_select"
                  ? item.selectedValue
                    ? item.selectedValue.map(value => value + " ")
                    : null
                  : item.selectedValue}
              </Text>
            </Body>
          </ListItem>
        )}
      />
    </View>
  );
};

export default SetPreference;
