import React from "react";
import styles from "./Styles/AddressCard";
import { Card, CardItem, Text, Body, View, Icon } from "native-base";

const CentreCard = ({ centre, selectCentre }) => (
  <Card>
    <CardItem
      button
      style={centre.selected ? styles.card : null}
      onPress={() => selectCentre(centre)}
    >
      <Body>
        <View>
          <Text>{centre.name}</Text>
        </View>
        <Text>{centre.address}</Text>
        <Text>
          {centre.city_name}, {centre.state_name}, {centre.country_name} -
          {centre.pincode}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

export default CentreCard;
