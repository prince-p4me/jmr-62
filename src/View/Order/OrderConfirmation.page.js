import React from "react";
import { Container, Content, View } from "native-base";
import Label from "../Components/Label";
import ButtonWithLoader from "../Components/ButtonWithLoader";
const OrderConfirmation = ({ orderId, goToHome }) => {
  return (
    <Container>
      <Content padder>
        <View style={{ height: 200 }} />
        <Label text={"Thank you for your Order!"} />
        <Label text={"Order No: " + orderId} large={true} />
        <View style={{ height: 25 }} />
        <ButtonWithLoader title="Go to Home" onPress={goToHome} />
        <View style={{ height: 25 }} />
        <Label text={"Please check your email for invoice!"} />
        <Label text={"You may view the order under My Orders!"} />
      </Content>
    </Container>
  );
};

export default OrderConfirmation;
