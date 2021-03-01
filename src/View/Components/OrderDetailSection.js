import React from "react";
import { View, Text, ListItem, Body, Right } from "native-base";
import OrderDetailProduct from "./OrderDetailProduct";
import { FlatList } from "react-native";
import styles from "./Styles/OrderSection";

const OrderDetailSection = ({ item }) => (
  <View>
    <ListItem itemDivider>
      <Body>
        <Text style={styles.locationName}>
          {item.fromLocation} to {item.toLocation} ({item.invoice_code})
        </Text>
        <Text note style={styles.delivery}>
          {item.schedule_delivery_date}, {item.schedult_delivery_time}
        </Text>
      </Body>
      <Right>
        <Text style={styles.delivery}>{item.delivery_status}</Text>
      </Right>
    </ListItem>
    <FlatList
      data={item.products}
      keyExtractor={product => product.product_id}
      renderItem={({ item }) => <OrderDetailProduct item={item} />}
    />
    <ListItem style={styles.listItem}>
      {item.bag_qty > 0 ? (
        <View style={styles.shopLine3}>
          <Text style={styles.left}>
            Bag (Excl. GST) - {item.bag_qty} units
          </Text>
          <Text style={styles.right}>{item.bag_price}</Text>
        </View>
      ) : null}
      {item.gift_qty > 0 ? (
        <View style={styles.shopLine3}>
          <Text style={styles.left}>Gifting Option (Excl. GST)</Text>
          <Text style={styles.right}>{item.gift_price}</Text>
        </View>
      ) : null}
      <View style={styles.shopLine3}>
        <Text style={styles.left}>Shipping Charges (Excl. GST)</Text>
        <Text style={styles.right}>{item.shipping}</Text>
      </View>

      <View style={styles.shopLine3}>
        <Text style={styles.left}>GST</Text>
        <Text style={styles.right}>{item.tax}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.leftBold}>Total</Text>
        <Text style={styles.rightBold}>Rs. {item.subtotal}</Text>
      </View>
    </ListItem>
  </View>
);

export default OrderDetailSection;
