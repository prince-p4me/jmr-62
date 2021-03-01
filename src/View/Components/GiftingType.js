import React from "react";
import { ListItem, Body, Right, Text } from "native-base";
import GiftingTypePicker from "./GiftingTypePicker";

const GiftingType = ({ giftingTypeOptions, item }) => (
  <ListItem>
    <Body>
      <Text onPress={() => giftingTypeOptions.selectGiftingType(item)}>
        {item.giftingType ? item.giftingType.name : "Select Gifting Option"}
      </Text>
      {item.giftingType ? <Text note>Rs. {item.giftingType.price}</Text> : null}
    </Body>
  </ListItem>
);

export default GiftingType;
