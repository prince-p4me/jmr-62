import React from "react";
import { Container, View, Content, Footer } from "native-base";
import { FlatList } from "react-native";
import CartSection from "../Components/CartSection";
import ButtonFooter from "../Components/ButtonFooter";
import Label from "../Components/Label";
import CustomHeader from "../Components/CustomHeader";
const Cart = ({
  sections,
  incQty,
  decQty,
  checkOut,
  selectedShippingLocationName,
  changeDeliveryDate,
  changeTimeSlot,
  bagTypeOptions,
  giftingTypeOptions,
  setPreference,
  colorClicked, navigation
}) => {
  return (
    <Container>
      <CustomHeader title="Cart" navigation={navigation} root={true}></CustomHeader>
      <Content>
        <FlatList
          data={sections}
          keyExtractor={section => section.sourcingLocationId}
          renderItem={({ item }) => (
            <CartSection
              item={item}
              incQty={incQty}
              decQty={decQty}
              selectedShippingLocationName={selectedShippingLocationName}
              changeDeliveryDate={changeDeliveryDate}
              changeTimeSlot={changeTimeSlot}
              bagTypeOptions={bagTypeOptions}
              giftingTypeOptions={giftingTypeOptions}
              setPreference={setPreference}
              colorClicked={colorClicked}
            />
          )}
        />
        {sections.length == 0 ? (
          <View>
            <View style={{ height: 250 }} />
            <Label text={"You added products will appear here!"} />
          </View>
        ) : null}
      </Content>
      {sections.length > 0 ? (
        <ButtonFooter title="CHECK OUT" footerClicked={checkOut} />
      ) : null}
    </Container>
  );
};

export default Cart;
