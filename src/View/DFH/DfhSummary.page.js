import React from "react";
import {
  Container,
  Content,
  Button,
  Text,
  ListItem,
  Body,
  Right,
  View
} from "native-base";
import { FlatList } from "react-native";
import StepsIndicator from "./StepsIndicator.component";
import DfhAddressCard from "../Components/DfhAddressCard";
import DfhOrderBlock from "../Components/DfhOrderBlock";
import styles from "./Styles/DfhSummary.style";
import CustomHeader from "../Components/CustomHeader";

const Items = ({ items }) => (
  <View>
    <ListItem itemDivider>
      <Body>
        <Text style={styles.locationName}>Items</Text>
      </Body>
    </ListItem>
    <FlatList
      data={items}
      keyExtractor={item => item.description}
      renderItem={({ item }) => (
        <ListItem>
          <Body>
            <Text>{item.description}</Text>
            <Text note>Qty: {item.quantity}</Text>
          </Body>
          <Right>
            <Text note>{item.packagingType.name}</Text>
          </Right>
        </ListItem>
      )}
    />
  </View>
);

const DfhSummary = ({ dfh, navigation, deliveryLocation, pickupLocation, goToNext }) => (
  <Container>
    <CustomHeader navigation={navigation} title="Summary" />

    <Content padder>
      <StepsIndicator currentPosition={4} />
      <Items items={dfh.items} />
      <DfhOrderBlock orderSummary={dfh.orderSummary} />
      <ListItem itemDivider>
        <Body>
          <Text style={styles.locationName}>Pickup</Text>
          <Text note style={styles.delivery}>
            {dfh.pickUp.date}, {dfh.pickUp.time}
          </Text>
        </Body>
      </ListItem>
      {/* <ListItem>
        <Body>
          <Text>Home Pickup Needed?</Text>
        </Body>
        <Right>
          <Text note>{dfh.pickUp.needed ? "Yes" : "No"}</Text>
        </Right>
      </ListItem> */}
      {dfh.pickUp.needed ? null : (
        <ListItem>
          <Body>
            <Text>{dfh.pickUp.centreName}</Text>
            <Text note>DFH Pickup Centre</Text>
          </Body>
        </ListItem>
      )}

      <DfhAddressCard address={dfh.from} location={pickupLocation} />
      <ListItem itemDivider>
        <Body>
          <Text style={styles.locationName}>Delivery</Text>
          <Text note style={styles.delivery}>
            {dfh.delivery.date}, {dfh.delivery.time}
          </Text>
        </Body>
      </ListItem>
      {/* <ListItem>
        <Body>
          <Text>Home Delivery Needed?</Text>
        </Body>
        <Right>
          <Text note>{dfh.delivery.needed ? "Yes" : "No"}</Text>
        </Right>
      </ListItem> */}
      {dfh.delivery.needed ? null : (
        <ListItem>
          <Body>
            <Text>{dfh.delivery.centreName}</Text>
            <Text note>DFH Delivery Centre</Text>
          </Body>
        </ListItem>
      )}

      <DfhAddressCard address={dfh.to} location={deliveryLocation} />
      <Button block style={styles.nextButton} onPress={goToNext}>
        <Text>NEXT</Text>
      </Button>
    </Content>
  </Container>
);

export default DfhSummary;
