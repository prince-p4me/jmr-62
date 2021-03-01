import React from "react";
import { Container, Content, View } from "native-base";
import ButtonList from "../Components/ButtonList";
import Label from "../Components/Label";
import CustomHeader from "../Components/CustomHeader";
const PaymentMethods = ({
  paymentMethods,
  selectPaymentMethod,
  amount, navigation,
  createOrder
}) => {
  return (
    <Container>
      {/* <CustomHeader title="Payment" navigation={navigation} /> */}
      <Content padder>
        <View style={{ height: 75 }} />
        <Label text={"Payable Amount"} />
        <Label text={"Rs. " + amount} large={true} />
        <View style={{ height: 25 }} />
        <ButtonList items={paymentMethods} itemClicked={selectPaymentMethod} />
      </Content>
    </Container>
  );
};

export default PaymentMethods;
