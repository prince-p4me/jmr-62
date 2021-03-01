import React from "react";
import { Container, Content, List } from "native-base";
import { ActivityIndicator } from "react-native";
import LabelValueItem from "../Components/LabelValueItem";
import moment from "moment";
import OrderList from "../Components/OrderList";
import CustomHeader from "../Components/CustomHeader";

const MyOrders = ({ orders, orderClicked, navigation }) => {
  return (
    <Container>
      <CustomHeader navigation={navigation} title="My Orders"></CustomHeader>
      <Content>
        <OrderList items={orders} orderClicked={orderClicked} />
      </Content>
    </Container>
  );
};

export default MyOrders;
