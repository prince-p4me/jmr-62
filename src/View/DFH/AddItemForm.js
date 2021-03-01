import React from "react";
import { Container, Content } from "native-base";
import { reduxForm } from "redux-form";
import Label from "../Components/Label";
import ButtonWithLoader from "../Components/ButtonWithLoader";
import { connect } from "react-redux";

import ItemForm from "../Components/AddItemForm";

const AddItemForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  mobile,
  fetching,
  packagingTypes,
  closeModal
}) => (
  <Container>
    <Content padder>
      <Label text={"Enter Item Details"} />
      <ItemForm
        handleSubmit={handleSubmit}
        fetching={fetching}
        packagingTypes={packagingTypes}
      />
      <ButtonWithLoader
        fetching={fetching}
        title="Cancel"
        onPress={closeModal}
        transparent={true}
      />
    </Content>
  </Container>
);

const mapStateToProps = ({ dfh }) => {
  if (dfh.packagingTypes) {
    return {
      initialValues: { packagingType: dfh.packagingTypes[0] }
    };
  } else {
    return {};
  }
};

export default connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: "AddItem", // a unique identifier for this form
    enableReinitialize: true
  })(AddItemForm)
);
