import React from "react";
import { View, Text, ListItem, Body, Right } from "native-base";
import CartItem from "../Components/CartItem";
import { FlatList } from "react-native";
import BagType from "../Components/BagType";
import GiftingType from "../Components/GiftingType";

const CartSection = ({
  item,
  incQty,
  decQty,
  selectedShippingLocationName,
  changeDeliveryDate,
  changeTimeSlot,
  bagTypeOptions,
  giftingTypeOptions,
  setPreference,
  colorClicked
}) => (
  <View>
    <ListItem itemDivider>
      <Text>
        {item.sourcingLocationName} to {selectedShippingLocationName}
      </Text>
    </ListItem>
    <ListItem>
      <Text note>Get free delivery for orders above Rs. {item.minValue}</Text>
    </ListItem>
    <FlatList
      data={item.products}
      keyExtractor={product => product.productId}
      renderItem={({ item }) => (
        <CartItem
          item={item}
          incQty={incQty}
          decQty={decQty}
          setPreference={setPreference}
          colorClicked={colorClicked}
        />
      )}
    />
    <ListItem onPress={() => changeDeliveryDate(item)}>
      <Body>
        <Text>{item.deliveryDate}</Text>
        <Text note>Delivery Date</Text>
      </Body>
      <Right>
        <Text note>Change</Text>
      </Right>
    </ListItem>
    <ListItem onPress={() => changeTimeSlot(item)}>
      <Body>
        <Text>{item.deliveryTime}</Text>
        <Text note>Delivery Time</Text>
      </Body>
      <Right>
        <Text note>Change</Text>
      </Right>
    </ListItem>
    {/* <BagType bagTypeOptions={bagTypeOptions} item={item} />
    <GiftingType giftingTypeOptions={giftingTypeOptions} item={item} /> */}
  </View>
);

export default CartSection;
