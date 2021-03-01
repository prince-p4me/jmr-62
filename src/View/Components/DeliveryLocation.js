import React from "react";
import { Text, View } from "react-native";
import styles from "./Styles/DeliveryLocation";
import { Button, Icon } from "native-base";
import { Colors } from "../Themes";

const DeliveryLocation = ({ location, locationClicked }) => (
  <View style={styles.view}>
    <Icon type="FontAwesome" name="map-marker" style={styles.locationIcon} />
    <Text style={styles.text}> Your delivery location is </Text>
    <Button transparent onPress={locationClicked}>
      <Text style={styles.locationText}>{location.name}</Text>
    </Button>
  </View>
);

export default DeliveryLocation;
