import React from "react";
import { ListItem, Body, Right, Text } from "native-base";
import { Switch } from "react-native";

import { Colors } from "../Themes";

const SwitchComponent = ({ onValueChange, value, title, note }) => (
  <ListItem>
    <Body>
      <Text>{title}</Text>
      <Text note>{note}</Text>
    </Body>
    <Right>
      <Switch
        trackColor={{
          false: Colors.lightCharcoal,
          true: Colors.ember
        }}
        value={value}
        onValueChange={onValueChange}
      />
    </Right>
  </ListItem>
);

export default SwitchComponent;
