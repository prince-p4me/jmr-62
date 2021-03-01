import React from "react";
import { ListItem, Body, Right, Icon, Text } from "native-base";
import { TouchableOpacity } from "react-native";

import styles from "./Styles/BagType";

const BagType = ({ bagTypeOptions, item }) => (
  <ListItem>
    <Body>
      <Text onPress={() => bagTypeOptions.selectBagType(item)}>
        {item.bagType ? item.bagType.name : "Select Bag"}
      </Text>
      {item.bagType ? <Text note>Rs. {item.bagType.price}</Text> : null}
    </Body>
    {item.bagType ? (
      <Right style={styles.quantitySection}>
        <TouchableOpacity
          onPress={() => bagTypeOptions.decBagQty(item)}
          disabled={item.bagQuantity == 0}
        >
          <Icon style={styles.iconMinus} type="FontAwesome" name="minus" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.bagQuantity}</Text>
        <TouchableOpacity onPress={() => bagTypeOptions.incBagQty(item)}>
          <Icon style={styles.iconPlus} type="FontAwesome" name="plus" />
        </TouchableOpacity>
      </Right>
    ) : null}
  </ListItem>
);

export default BagType;
