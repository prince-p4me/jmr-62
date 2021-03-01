import React from "react";
import {
  Container,
  Content,
  Button,
  Text,
  ListItem,
  Body,
  Right
} from "native-base";

import StepsIndicator from "./StepsIndicator.component";
import Switch from "../Components/Switch";
import styles from "./Styles/DfhItems.style";
import CustomHeader from "../Components/CustomHeader";

const DfhPreference = ({
  delivery,
  pickUp,
  changeDeliveryDate,
  changeDeliveryTimeSlot,
  changePickupDate,
  changePickupTimeSlot,
  changeHomeDeliveryStatus,
  changeHomePickupStatus,
  selectDeliveryDfhCentre,
  dfhDeliveryCentres,
  dfhPickupCentres,
  selectPickupDfhCentre,
  goToNext, navigation
}) => (
  <Container>
    <CustomHeader navigation={navigation} title="Preferences" />

    <Content padder>
      <StepsIndicator currentPosition={3} />
      <ListItem itemHeader first>
        <Text>DELIVERY SERVICE</Text>
      </ListItem>
      <ListItem onPress={changeDeliveryDate}>
        <Body>
          <Text>{delivery.date}</Text>
          <Text note>Delivery Date</Text>
        </Body>
        <Right>
          <Text note>Select</Text>
        </Right>
      </ListItem>
      <ListItem onPress={changeDeliveryTimeSlot}>
        <Body>
          <Text>{delivery.time}</Text>
          <Text note>Delivery Time</Text>
        </Body>
        <Right>
          <Text note>Select</Text>
        </Right>
      </ListItem>
      {/* <Switch
        title={"Do you need Home Delivery?"}
        note={"Charged Extra"}
        value={delivery.needed}
        onValueChange={changeHomeDeliveryStatus}
      /> */}
      {!delivery.needed ? (
        dfhDeliveryCentres.length > 0 ? (
          <ListItem onPress={selectDeliveryDfhCentre}>
            <Body>
              <Text>{delivery.centreName}</Text>
              <Text note>Delivery Centre</Text>
            </Body>
            <Right>
              <Text note>Select</Text>
            </Right>
          </ListItem>
        ) : (
            <ListItem>
              <Body>
                <Text>There are no DFH Centres in your city</Text>
                <Text note>Please choose Home Delivery</Text>
              </Body>
            </ListItem>
          )
      ) : null}
      <ListItem itemHeader first>
        <Text>PICKUP SERVICE</Text>
      </ListItem>
      <ListItem onPress={changePickupDate}>
        <Body>
          <Text>{pickUp.date}</Text>
          <Text note>Pickup Date</Text>
        </Body>
        <Right>
          <Text note>Select</Text>
        </Right>
      </ListItem>
      <ListItem onPress={changePickupTimeSlot}>
        <Body>
          <Text>{pickUp.time}</Text>
          <Text note>Pickup Time</Text>
        </Body>
        <Right>
          <Text note>Select</Text>
        </Right>
      </ListItem>
      {/* <Switch
        title={"Do you need Home Pickup?"}
        note={"Charged Extra"}
        value={pickUp.needed}
        onValueChange={changeHomePickupStatus}
      /> */}
      {!pickUp.needed ? (
        dfhPickupCentres.length > 0 ? (
          <ListItem onPress={selectPickupDfhCentre}>
            <Body>
              <Text>{pickUp.centreName}</Text>
              <Text note>Pickup Centre</Text>
            </Body>
            <Right>
              <Text note>Select</Text>
            </Right>
          </ListItem>
        ) : (
            <ListItem>
              <Body>
                <Text>There are no DFH Centres at your location</Text>
                <Text note>Please choose Home Pickup</Text>
              </Body>
            </ListItem>
          )
      ) : null}
      <Button block style={styles.nextButton} onPress={goToNext}>
        <Text>NEXT</Text>
      </Button>
    </Content>
  </Container>
);

export default DfhPreference;
