import React from "react";
import { Container, Content } from "native-base";
import RadioListForStrings from "./RadioListForStrings";
import RadioList from "./RadioList";
import Label from "./Label";
import ButtonWithLoader from "./ButtonWithLoader";
import CustomHeader from "./CustomHeader";

const SelectElement = ({
  items,
  itemClicked,
  title, navigation,
  isItemString,
  isMultiSelect,
  submitSelection
}) => {
  return (
    <Container>
      {/* <CustomHeader title={title} navigation={navigation} /> */}
      <Content padder>
        <Label text={title} />
        {isItemString ? (
          <RadioListForStrings items={items} itemClicked={itemClicked} />
        ) : (
            <RadioList items={items} itemClicked={itemClicked} />
          )}
        {isMultiSelect ? (
          <ButtonWithLoader title="Submit" onPress={submitSelection} />
        ) : null}
      </Content>
    </Container>
  );
};

export default SelectElement;
