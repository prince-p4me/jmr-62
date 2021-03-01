import React from "react";
import styles from "./Styles/AddressCard";
import { Card, CardItem, Text, Body, View, Icon } from "native-base";

const AddressCard = ({ address, selectAddress }) => (
  <Card>
    <CardItem
      button
      style={address.selected ? styles.card : null}
      onPress={() => selectAddress(address)}
    >
      <Body>
        <View>
          <Text>
            {address.firstname} {address.lastname}
          </Text>
        </View>

        <Text>
          {address.address1}, {address.address2}
        </Text>
        <Text>
          {address.city_name}, {address.state_name}, {address.country_name} -
          {address.zip}
        </Text>
        <Text>
          {address.email}, {address.phone}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

export default AddressCard;
