import React from "react";
import { Container, Text, Content, Right, ListItem, Body } from "native-base";
import DfhToAddress from "../Components/DfhToAddress";

import StepsIndicator from "./StepsIndicator.component";
import CustomHeader from "../Components/CustomHeader";
const Dfh = ({
  goToNext,
  currentPosition,
  chooseLocation,
  location,
  fetching
  , navigation }) => {
  return (
    <Container>
      <CustomHeader navigation={navigation} title="To Address" />
      <Content padder>
        <StepsIndicator currentPosition={currentPosition} />
        <ListItem onPress={chooseLocation}>
          <Body>
            <Text>{location}</Text>
            <Text note>Choose Delivery Location</Text>
          </Body>
          <Right />
        </ListItem>
        <DfhToAddress
          onSubmit={goToNext}
          buttonText="Next"
          fetching={fetching}
        />
      </Content>
    </Container>
  );
};

export default Dfh;
