import React from "react";
import { Text, Body, ListItem, View } from "native-base";
import styles from "./Styles/DfhSummary.style";

const DfhOrderBlock = ({ orderSummary }) => (
  <View>
    <ListItem itemDivider>
      <Body>
        <Text style={styles.locationName}>Charges</Text>
      </Body>
    </ListItem>
    <ListItem style={styles.listItem}>
      <View style={styles.shopLine3}>
        <Text style={styles.left}>Freight Charges</Text>
        <Text style={styles.right}>Rs. {orderSummary.frightCharges}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.left}>GST</Text>
        <Text style={styles.right}>Rs. {orderSummary.gst}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.leftBold}>Estimated Total</Text>
        <Text style={styles.rightBold}>Rs. {orderSummary.total}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.left}>Booking Charges</Text>
        <Text style={styles.right}>Rs. {orderSummary.booking_charges}</Text>
      </View>
    </ListItem>
  </View>
);

export default DfhOrderBlock;
