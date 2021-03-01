import React from "react";
import { Text, Body, ListItem } from "native-base";

const LabelValueItem = ({ label, value }) => (
  <ListItem>
    <Body>
      <Text>{value}</Text>
      <Text note>{label}</Text>
    </Body>
  </ListItem>
);

export default LabelValueItem;
