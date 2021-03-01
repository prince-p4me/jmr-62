import React from "react";
import { Container, Content } from "native-base";
import RadioList from "../Components/RadioList";
import FooterButton from "../Components/FooterButton";
import HeaderWithTitle from "../Components/HeaderWithTitle";
const LocationChange = ({
  shippingLocations,
  shippingLocationSelected,
  closeLocationSelector,
  disabled
}) => (
  <Container>
    <HeaderWithTitle title="Select Delivery Location" />
    <Content>
      {(shippingLocations && shippingLocations.length) ? <RadioList
        items={shippingLocations}
        itemClicked={shippingLocationSelected}
      /> : null}
    </Content>
  </Container>
);

export default LocationChange;
