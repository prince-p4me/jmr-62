import React from "react";
import {
  Container,
  Content,
  ListItem,
  View,
  Body,
  Text,
  Right,
  Card,
  CardItem
} from "native-base";
import DfhOrderBlock from "../Components/DfhOrderBlock";
import Label from "../Components/Label";
import styles from "../Components/Styles/OrderDetailFooter";
import styles1 from "./Styles/DfhSummary.style";
import { FlatList } from "react-native";
import CustomHeader from "../Components/CustomHeader";

const Items = ({ items }) => (
  <View>
    <ListItem itemDivider>
      <Body>
        <Text style={styles1.locationName}>Items</Text>
      </Body>
    </ListItem>
    <FlatList
      data={items}
      keyExtractor={item => item.detail}
      renderItem={({ item }) => (
        <ListItem>
          <Body>
            <Text>{item.detail}</Text>
            <Text note>Qty: {item.quantity}</Text>
          </Body>
          <Right>
            <Text note>{item.packagingTypeName}</Text>
          </Right>
        </ListItem>
      )}
    />
  </View>
);

const PickupAddressCard = ({ order }) => (
  <Card>
    <CardItem>
      <Body>
        <View>
          <Text>{order.fromName}</Text>
        </View>
        <Text>{order.fromAddress}</Text>
        <Text>
          {order.fromLocation} - {order.fromZip}
        </Text>
        <Text>
          {order.fromEmail}, {order.fromPhone}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

const DeliveryAddressCard = ({ order }) => (
  <Card>
    <CardItem>
      <Body>
        <View>
          <Text>{order.toName}</Text>
        </View>
        <Text>{order.toAddress}</Text>
        <Text>
          {order.toLocation} - {order.toZip}
        </Text>
        <Text>
          {order.toEmail}, {order.toPhone}
        </Text>
      </Body>
    </CardItem>
  </Card>
);

const Pickup = ({ order }) => (
  <View>
    <ListItem itemDivider>
      <Body>
        <Text style={styles.locationName}>Pickup</Text>
        <Text note style={styles.delivery}>
          {order.pickupDate}, {order.pickupTime}
        </Text>
      </Body>
    </ListItem>
    <ListItem>
      <Body>
        <Text>Home Pickup Needed?</Text>
      </Body>
      <Right>
        <Text note>{order.isPickUp == "1" ? "Yes" : "No"}</Text>
      </Right>
    </ListItem>
    <ListItem>
      <Body>
        <Text>Pickup Status</Text>
      </Body>
      <Right>
        <Text note>{order.pickupStatus}</Text>
      </Right>
    </ListItem>
    <PickupAddressCard order={order} />
  </View>
);

const Delivery = ({ order }) => (
  <View>
    <ListItem itemDivider>
      <Body>
        <Text style={styles.locationName}>Delivery</Text>
        <Text note style={styles.delivery}>
          {order.deliveryDate}, {order.deliveryTime}
        </Text>
      </Body>
    </ListItem>
    <ListItem>
      <Body>
        <Text>Home Delivery Needed?</Text>
      </Body>
      <Right>
        <Text note>{order.isDelivery == "1" ? "Yes" : "No"}</Text>
      </Right>
    </ListItem>
    <ListItem>
      <Body>
        <Text>Delivery Status</Text>
      </Body>
      <Right>
        <Text note>{order.deliveryStatus}</Text>
      </Right>
    </ListItem>
    <DeliveryAddressCard order={order} />
  </View>
);

const OrderDetail = ({ order, navigation }) => {
  return (
    <Container>
      <CustomHeader navigation={navigation} title="Order Detail"></CustomHeader>

      <Content padder>
        <Label text={"Order: " + order.saleCode} large />
        <ListItem style={styles.listItem}>
          <Label text={"Payment Status: " + order.paymentStatus} />
          <Label text={"Delivery Status: " + order.deliveryStatus} />
        </ListItem>
        <DfhOrderBlock orderSummary={order.chargesDetails} />
        <Items items={order.items} />
        <Pickup order={order} />
        <Delivery order={order} />
      </Content>
    </Container>
  );
};

export default OrderDetail;
