import React from "react";
import { Container, Content } from "native-base";
import OrderDetailSectionList from "../Components/OrderDetailSectionList";
import OrderDetailBlock from "../Components/OrderDetailBlock";
import CustomHeader from "../Components/CustomHeader";
const OrderDetail = ({ order, navigation }) => {
  return (

    <Container>
      <CustomHeader navigation={navigation} title="Order Detail"></CustomHeader>
      <Content padder>
        <OrderDetailBlock order={order} />
        <OrderDetailSectionList items={order.invoices} />
      </Content>
    </Container>
  );
};

export default OrderDetail;
