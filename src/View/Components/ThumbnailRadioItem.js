import React from "react";
import {
  Text,
  ListItem,
  Body,
  Right,
  Left,
  Thumbnail,
  Radio
} from "native-base";
import { TouchableWithoutFeedback } from "react-native";

const ThumbnailRadioItem = ({ item, itemClicked }) => (
  <TouchableWithoutFeedback onPress={() => itemClicked(item)}>
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: item.image }} />
      </Left>
      <Body>
        <Text>{item.name}</Text>
      </Body>
      <Right>
        <Radio selected={item.selected} />
      </Right>
    </ListItem>
  </TouchableWithoutFeedback>
);

export default ThumbnailRadioItem;
