import React from "react";
import { Container, Content } from "native-base";
import AddressList from "../Components/AddressList";
import ButtonFooter from "../Components/ButtonFooter";
import TextButton from "../Components/TextButton";
import CustomHeader from "../Components/CustomHeader";
const Address = ({ addresses, selectAddress, navigation, title, next, addAddress }) => {
  return (
    <Container>
      <CustomHeader title={title} navigation={navigation} />
      <Content padder>
        <TextButton title="ADD NEW ADDRESS" onPress={addAddress} />
        <AddressList items={addresses} selectAddress={selectAddress} />
      </Content>

      <ButtonFooter title="NEXT" footerClicked={next} />
    </Container>
  );
};

export default Address;
