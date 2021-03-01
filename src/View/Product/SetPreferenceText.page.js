import React from "react";
import { Container, Content, ListItem, Body, Text } from "native-base";
import { FlatList } from "react-native";
import Label from "../Components/Label";
import ButtonWithLoader from "../Components/ButtonWithLoader";
import PreferenceTextForm from "../Components/PreferenceTextForm";

const SetPreferenceText = ({ title, saveText, cancel }) => {
  return (
    <Container>
      <Content padder>
        <Label text={title} />
        <PreferenceTextForm onSubmit={saveText} title={title} />
        <ButtonWithLoader title="Cancel" onPress={cancel} transparent={true} />
      </Content>
    </Container>
  );
};

export default SetPreferenceText;
