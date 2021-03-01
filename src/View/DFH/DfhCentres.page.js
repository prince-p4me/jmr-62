import React from "react";
import { Container, Content } from "native-base";
import CentreList from "../Components/CentreList";
import ButtonWithLoader from "../Components/ButtonWithLoader";
import Label from "../Components/Label";
const DfhCentres = ({ dfhCentres, selectCentre, onCancel, title }) => {
  return (
    <Container>
      <Content padder>
        <Label text={title} />
        <CentreList items={dfhCentres} selectCentre={selectCentre} />
        <ButtonWithLoader title="Cancel" onPress={onCancel} transparent />
      </Content>
    </Container>
  );
};

export default DfhCentres;
