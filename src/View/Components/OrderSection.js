import React from "react";
import { View, Text, ListItem, Body, Right } from "native-base";
import OrderProduct from "./OrderProduct";
import { FlatList } from "react-native";
import styles from "./Styles/OrderSection";

const OrderSection = ({ item, shippingLocation }) => (
  <View>
    <ListItem itemDivider>
      <Body>
        <Text style={styles.locationName}>
          {item.sourcingLocationName} to {shippingLocation}
        </Text>
        <Text note style={styles.delivery}>
          {item.deliveryDate}, {item.deliveryTime}
        </Text>
      </Body>
    </ListItem>
    <FlatList
      data={item.products}
      keyExtractor={product => product.productId}
      renderItem={({ item }) => <OrderProduct item={item} />}
    />
    <ListItem style={styles.listItem}>
      {item.bagQuantity > 0 ? (
        <View style={styles.shopLine3}>
          <Text style={styles.left}>
            Bag (Excl. GST) - {item.bagQuantity} units
          </Text>
          <Text style={styles.right}>{item.bagPrice}</Text>
        </View>
      ) : null}
      {item.giftQuantity > 0 ? (
        <View style={styles.shopLine3}>
          <Text style={styles.left}>Gifting Option (Excl. GST)</Text>
          <Text style={styles.right}>{item.giftPrice}</Text>
        </View>
      ) : null}
      <View style={styles.shopLine3}>
        <Text style={styles.left}>Shipping Charges (Excl. GST)</Text>
        <Text style={styles.right}>{item.shipping}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.left}>GST on shipping charges</Text>
        <Text style={styles.right}>{item.shippingTax}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.left}>Total GST</Text>
        <Text style={styles.right}>{item.tax}</Text>
      </View>
      <View style={styles.shopLine3}>
        <Text style={styles.leftBold}>Total</Text>
        <Text style={styles.rightBold}>Rs. {item.sub_total}</Text>
      </View>
    </ListItem>
  </View>
);

export default OrderSection;
