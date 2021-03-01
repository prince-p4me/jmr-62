import React from "react";
import { Container, Content } from "native-base";
import RadioListForStrings from "../Components/RadioListForStrings";
import RadioList from "../Components/RadioList";
import Label from "../Components/Label";
import ButtonWithLoader from "../Components/ButtonWithLoader";

const SelectTimeSlot = ({
  items,
  itemClicked,
  title,
  isItemString,
  isMultiSelect,
  submitSelection
}) => {
  return (
    <Container>
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

export default SelectTimeSlot;
