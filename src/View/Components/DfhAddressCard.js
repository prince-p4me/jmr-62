import React from "react";
import styles from "./Styles/AddressCard";
import { Card, CardItem, Text, Body, View, Icon } from "native-base";

const AddressCard = ({ address, location }) => (
  <Card>
    <CardItem>
      <Body>
        <View>
          <Text>
            {address.firstName} {address.lastName}
          </Text>
        </View>
        <Text>
          {address.address1}, {address.address2}
        </Text>
        <Text>
          {location.name} - {address.zip}
        </Text>
        <Text>
          {address.email}, {address.phone}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

export default AddressCard;
